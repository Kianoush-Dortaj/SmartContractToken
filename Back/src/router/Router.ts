import { Router } from 'express';
import usersRouter from './tether.router';

const router = Router();

router.use('/tether', usersRouter);

export default router;