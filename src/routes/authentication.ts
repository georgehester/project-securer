/*
    Imported module(s)
*/
import express from 'express';
const router = express.Router();
import rateLimiter from '../middlewares/rate-limiter';

/*
    Imported endpoint(s)
*/
import endpointKeysCreate from './authentication/keys-create';

/*
    Imported requestValidator(s)
*/
import endpointKeysCreateValidator from '../validators/authentication/keys-create';

/*
    Endpoints
*/
router.post(
    '/keys/create',
    rateLimiter(1, 1),
    endpointKeysCreateValidator,
    endpointKeysCreate
);

/*
    Exported router
*/
export = router;