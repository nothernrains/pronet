import nextConnect from 'next-connect';
import multer from 'multer';

import Movies from '../../../models/Movies';

const upload = multer({

    storage: multer.diskStorage({
        destination: './public/movies',
        filename: (req, file, cb) => cb(null, file.originalname),
    }),

});

const moviesApiRoute = nextConnect({

    onError(error, req, res) {
        console.error('error', error);
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },

});

var cpUpload = upload.fields([{ name: 'cover_url', maxCount: 1 }, { name: 'movie_url', maxCount: 1 }])
moviesApiRoute.use(cpUpload);

moviesApiRoute.post( async ( req, res ) => {

    const requestBodyFile = req.files;
    const { title, description, duration, category} = req.body;
    const cover_url = requestBodyFile.cover_url[0].originalname;
    const movie_url = requestBodyFile.movie_url[0].originalname;

    console.log('requestBodyFile', {
        title, description, duration, category, cover_url, movie_url
    });

    const saveMovie = await Movies.create({
        title, description, duration, category, cover_url, movie_url
    });

    res.status(200).json({ data: 'POST' });

});

moviesApiRoute.get( async ( req, res ) => {
    const movies = await Movies.findAll();
    res.status(200).json({ movies });
});

export default moviesApiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};