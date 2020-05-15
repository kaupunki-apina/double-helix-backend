import * as express from 'express';

export const getFeed = (req: express.Request, res: express.Response) => {
  return res.json({ message: "Hello world!" });
};
