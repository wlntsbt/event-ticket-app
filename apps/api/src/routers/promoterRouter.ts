import express, { Router } from 'express';

// Define Router
const promoterRouter = Router();
promoterRouter.use(express.json()); // Body Parser

import EventRouter from '../features/event/eventRouter';

promoterRouter.use('/event', EventRouter);

export default promoterRouter;
