import nextConnect from 'next-connect';

import Movies from '../../../models/Movies';

import { Op } from 'sequelize';

const movieApiRoute = nextConnect({

    onError(error, req, res) {
        console.error('error', error);
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },

});


movieApiRoute.get( async ( req, res ) => {
    
    const movies = await Movies.findAll({ limit: 4 });

    res.status(200).json({ movies });

});

export default movieApiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};