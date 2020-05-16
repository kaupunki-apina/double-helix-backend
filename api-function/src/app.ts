import express from 'express';
import bodyParser from 'body-parser';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
import { createRoutes } from './routes';

export default function createApp() {
  const app = express();

  app.use(awsServerlessExpressMiddleware.eventContext());
  app.use(bodyParser.json());
  app.use(createRoutes());

  return app;
}
