import express, { Router } from 'express';

// Define Router
const promoterRouter = Router();
promoterRouter.use(express.json()); // Body Parser

import EventRouter from '../features/event/eventRouter';
import PromoRouter from '../features/promotion/promotionRouter';

promoterRouter.use('/event', EventRouter);
promoterRouter.use('/promo', PromoRouter);

export default promoterRouter;
