import { Router } from 'express';

const router = Router();

import { newPromoter, newAttendee, codeChecker } from './registerController';
import { validatorRegisterPromoter, validatorRegisterAttendee } from './registerMiddleware/registerValidator';
import { registerValidatorErrorHandler } from './registerMiddleware/registerValidatorErrorHandler';
router.post(
  '/promoter',
  validatorRegisterPromoter,
  registerValidatorErrorHandler,
  newPromoter,
);
router.post('/user', validatorRegisterAttendee, registerValidatorErrorHandler, newAttendee);
router.get('/code/:code', codeChecker);
export default router;
