import fs from 'fs';
import path from 'path';
const jwt = require("jsonwebtoken");

const Authorized = async (req, res, next) => {

    const keyPath = path.resolve('./') + '/keys/public.key';

    const bearerHeader = req.headers['authorization'];

    if (bearerHeader) {

        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        const publicKey = await fs.readFileSync(keyPath);
        const verifyToken = await jwt.verify( bearerToken, publicKey);

        if ( verifyToken ) {
            req.user = verifyToken;
            return next();
        } 

        res.status(401).json({ message: 'Unauthorized' });

    }
    
    res.status(403).json({ message: 'Unauthorized - no token' });

};

export default Authorized;