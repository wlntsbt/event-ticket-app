import { Router } from 'express';
const router = Router();

import { getAllEvents, getEvent } from './generalController';

router.get('/all-events', getAllEvents);
router.get('/event/:id', getEvent);
export default router;
