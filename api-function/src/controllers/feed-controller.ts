import { routeUtils } from '../util';


export const getFeed = routeUtils.createRoute(async (req, res) => {
  return {
    endpoint: 'getFeed',
  };
});
