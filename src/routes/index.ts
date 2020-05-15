import express from 'express';
import feedRoute from './feed';

export const createRoutes = () => {
  const router = express.Router();

  router.use('/feed', feedRoute);

  router.use('*', (req, res) => {
    return res.sendStatus(404);
  });
  
  return router;
};
