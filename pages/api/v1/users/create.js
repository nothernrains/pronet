import nextConnect from 'next-connect';
import bcrypt from 'bcrypt';

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
        res.status(200).json({ success: true, message: 'Account created successfully' });
    } else {
        res.status(200).json({ success: false, message: 'Failed to create account' });
    }

    

});

createUserApiRoute.get( async ( req, res ) => {
    const movies = await Movies.findAll();
    res.status(200).json({ movies });
});

export default createUserApiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};