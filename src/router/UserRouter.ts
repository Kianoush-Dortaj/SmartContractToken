import express, { Express, Router, NextFunction, Request, Response } from 'express';
const usersRouter = express.Router();

usersRouter.post('/Create', async (req: Request, res: Response) => {

})


usersRouter.put('/Update/:id', async (req: Request, res: Response) => {

})

usersRouter.delete('/Delete/:id', async (req: Request, res: Response) => {

})

usersRouter.get('/Get/:id', async (req: Request, res: Response) => {

})

export default usersRouter;