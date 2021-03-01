import nextConnect from 'next-connect';
import bcrypt from 'bcrypt';
import fs from 'fs';
const jwt = require("jsonwebtoken");

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
            const privateKey = fs.readFileSync('keys/jwtRS256.key');
            const token = await jwt.sign({ user }, privateKey, { algorithm: 'RS256' });
            res.status(200).json({ success: true, message: 'Successfully logged in', token, user });
        } else {
            res.status(404).json({ success: true, message: 'Account not found' });
        }
    }

    res.status(400).json({ success: false, message: 'Failed to login, invalid credentials' });

});


export default authApiRoute;
