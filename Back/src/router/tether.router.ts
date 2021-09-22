import express, { Express, Router, NextFunction, Request, Response } from 'express';
import controller from '../Controller/Account';
const usersRouter = express.Router();

usersRouter.get('/balanceInfo/:accountNumber', controller.GetBalance)


usersRouter.put('/Update/:id', async (req: Request, res: Response) => {

})

usersRouter.delete('/Delete/:id', async (req: Request, res: Response) => {

})

usersRouter.get('/Get/:id', async (req: Request, res: Response) => {

})

export default usersRouter;