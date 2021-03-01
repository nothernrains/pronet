import nextConnect from 'next-connect';

import transporter from '../../../utils/mailTransporter';

const mailApiRoute = nextConnect({

    onError(error, req, res) {
        console.error('error', error);
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },

});


mailApiRoute.get( async ( req, res ) => {

    const mailOptions = {
        from: process.env.MAIL_FROM_ADDRESS,
        to: 'sewapetj@gmail.com',
        subject: 'Sending Email via Node.js',
        text: 'That was easy!'
      };
      
    const sendEmail = await transporter.sendMail(mailOptions);

    console.log('sendEmail', sendEmail);

    res.status(200).json({ success: true });

});

export default mailApiRoute;