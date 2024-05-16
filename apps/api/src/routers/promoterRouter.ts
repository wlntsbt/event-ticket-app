import express, { Router } from 'express';

// Define Router
const promoterRouter = Router();
promoterRouter.use(express.json()); // Body Parser

import EventRouter from '../features/event/eventRouter';
import PromoRouter from '../features/promotion/promotionRouter';
import DataRouter from '../features/promoter/promoterRouter';

promoterRouter.use('/event', EventRouter);
promoterRouter.use('/promo', PromoRouter);
promoterRouter.use('/data', DataRouter);

export default promoterRouter;
