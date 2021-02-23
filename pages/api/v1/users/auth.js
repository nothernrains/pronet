import nextConnect from 'next-connect';
import bcrypt from 'bcrypt';

import Users from '../../../../models/Users';

const authApiRoute = nextConnect({

    onError(error, req, res) {
        console.error('error', error);
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },

});


authApiRoute.post( async ( req, res ) => {

    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email } });

    if ( user ) {
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            res.status(200).json({ success: true, message: 'Successfully logged in' });
        } else {
            res.status(401).json({ success: true, message: 'Failed to login' });
        }
    }

    res.status(401).json({ success: false, message: 'Failed to login' });

});


export default authApiRoute;
