import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';


const router = express.Router();

router.post('/', newUserValidator, userController.register);

router.post('/login',userController.login)

export default router;