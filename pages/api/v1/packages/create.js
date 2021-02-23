import nextConnect from 'next-connect';

import UserPackages from '../../../../models/UserPackage';
import Authorized from '../../../../middleware/jwt';

const createPackageApiRoute = nextConnect({

    onError(error, req, res) {
        console.error('error', error);
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },

});

createPackageApiRoute.use(Authorized);

createPackageApiRoute.post( async ( req, res ) => {

    const { packageId } = req.body;

    const save = await UserPackages.create({
        user_id: req.user.user.id, 
        package_id: packageId,
    });

    if ( save ) {
        res.status(200).json({ success: true, message: 'Package link successfully' });
    } else {
        res.status(400).json({ success: false, message: 'Failed to link user package' });
    }

});

export default createPackageApiRoute;