import nextConnect from 'next-connect';

import UserPaymentInfos from '../../../../models/UserPaymentInfos';
import UserPayments from '../../../../models/UserPayments';
import Authorized from '../../../../middleware/jwt';

import axios from 'axios';
import moment from 'moment';

const paymentProcessingApiRoute = nextConnect({

    onError(error, req, res) {
        console.error('error', error);
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },

});

paymentProcessingApiRoute.use(Authorized);

paymentProcessingApiRoute.post( async ( req, res ) => {

    const user = req.user;
    const user_id = user.id;

    const { cardNumber, cardHolder, cardExpiryMonth, cardExpiryYear, cardCVV } = req.body;
    const paymentUrl = process.env.PEACH_PAYMENT_URL;
    const paymentEntity = process.env.PEACH_PAYMENT_ENTITY;
    const paymentToken = process.env.PEACH_PAYMENT_TOKEN;

    const paymentMonth = moment().format("YYYY-MM");

    const payInfo = await UserPaymentInfos.findOne({ where: { user_id: user_id } });
    const monthPaymentMade = await UserPayments.findOne({ where: { user_id: user_id, month: paymentMonth } });

    if ( !payInfo ) {
        await UserPaymentInfos.create({
            user_id: user_id, 
            card_number: cardNumber,
            card_holder: cardHolder,
            card_expiry_month: cardExpiryMonth,
            card_expiry_year: cardExpiryYear,
            card_cvv: cardCVV,
        });
    }

    if ( !monthPaymentMade ) {
        await UserPayments.create({user_id: user_id, month: paymentMonth });
    }

    const config = {
        headers: { Authorization: `Bearer ${paymentToken}` }
    };

    try {

        const makePayment = await axios.post( paymentUrl, {
            entityId: paymentEntity,
            'amount': '35.00',
            'currency':'ZAR',
            'paymentBrand':'VISA',
            'paymentType':'DB',
            'card.number': cardNumber,
            'card.holder': cardHolder,
            'card.expiryMonth': cardExpiryMonth,
            'card.expiryYear': cardExpiryYear,
            'card.cvv': cardCVV,
        }, config);

        res.status(200).json({ success: true, message: 'Payment received' });
        
    } catch (error) {

        res.status(200).json({ success: true, message: error.response.data });
    }

});

export default paymentProcessingApiRoute;