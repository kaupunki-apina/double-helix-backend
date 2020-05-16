import * as express from 'express';

type RouteHandler = (req: express.Request, res: express.Response) => Promise<any>;


export const createRoute = (routeHandler: RouteHandler) => {
  return (req: express.Request, res: express.Response) => {
    return routeHandler(req, res)
      .then((result) => {
        return res.json(result);
      });
  };
};
