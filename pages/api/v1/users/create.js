import nextConnect from 'next-connect';
import bcrypt from 'bcrypt';
import fs from 'fs';
const jwt = require("jsonwebtoken");

import Users from '../../../../models/Users';

const createUserApiRoute = nextConnect({

    onError(error, req, res) {
        console.error('error', error);
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },

});


createUserApiRoute.post( async ( req, res ) => {

    const { name, surname, email, phoneNumber, password } = req.body;

    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const saveUser = await Users.create({
        name, surname, email, phoneNumber, password: hashedPassword, userRole: 1,
    });

    if ( saveUser ) {

        const user = await Users.findOne({ where: { email } });

        const privateKey = fs.readFileSync('keys/jwtRS256.key');
        const token = await jwt.sign({ user }, privateKey, { algorithm: 'RS256' });

        res.status(200).json({ success: true, message: 'Account created successfully', user, token });

    } else {

        res.status(400).json({ success: false, message: 'Failed to create account' });

    }

});

export default createUserApiRoute;
