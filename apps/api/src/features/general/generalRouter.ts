import { Router } from 'express';
const router = Router();

import { getAllEvents } from './generalController';

router.get('/all-events', getAllEvents);

export default router;
