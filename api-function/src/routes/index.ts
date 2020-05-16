import express from 'express';
import feedRoute from './feed';
import { routeUtils } from '../util';

export const createRoutes = () => {
  const router = express.Router();

  router.use('/feed', feedRoute);

  router.use('*', routeUtils.createRoute(async (req, res) => {
    return {
      endpoint: 'catchAll',
    }
  }));
  
  return router;
};
