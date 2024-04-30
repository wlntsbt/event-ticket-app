import { body } from 'express-validator';
import { Location } from '../registerType';

export const validatorRegisterPromoter = [
  body(['email', 'username', 'name', 'password'])
    .notEmpty()
    .withMessage('Incomplete data'),
  body('email').isString().isEmail().withMessage('Invalid email'),
  body('name')
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage('Name must have 3-20 chars'),
  body('password')
    .isString()
    .isLength({ min: 3, max: 15 })
    .withMessage('Password must have 3-15 chars'),
  body('username')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Username must have at least 3 chars'),
  body('location')
    .custom((val) => {
      console.log(val);
      return Object.values(Location).includes(val);
    })
    .withMessage('Location must be equal to values at ENUM')
    .optional(),
  body('phone').isString().optional(),
];

export const validatorRegisterAttendee = [
  body(['email', 'username', 'firstName', 'lastName', 'password'])
    .notEmpty()
    .withMessage('Incomplete data'),
  body('email').isString().isEmail().withMessage('Invalid email'),
  body('firstName')
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage('Firstname must have 3-20 chars'),
  body('lastName')
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage('Lastname must have 3-20 chars'),
  body('password')
    .isString()
    .isLength({ min: 3, max: 15 })
    .withMessage('Password must have 3-15 chars'),
  body('username')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Username must have at least 3 chars'),
  body('dob').isString().optional(),
  body('phone').isString().optional(),
  body('idCardNumber').isString().optional(),
  body('memberCode').isString().optional()
];
