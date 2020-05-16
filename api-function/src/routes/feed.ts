import express from 'express';
import { feedController } from '../controllers';

const feedRouter = express.Router();

feedRouter.get('/', feedController.getFeed);

export default feedRouter;