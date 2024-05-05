import { Router } from 'express';
const router = Router();

import { newBill, billPayment } from './ticketController';

router.post('/', newBill);
router.post('/:bill', billPayment);

export default router;
