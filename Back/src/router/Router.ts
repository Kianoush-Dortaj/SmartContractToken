import { Router } from 'express';
import accountRouter from './tether.router';

const router = Router();

router.use('/account', accountRouter);

export default router;