import axios from 'axios';
import { routeUtils, xmlUtils } from '../util';


const xmlToFeed = (xmlObject: any) => {
  return xmlObject?.rss?.channel?.item?.map((item: any) => ({
    title: item?.title?._text,
    description: item?.description?._text,
    link: item?.link?._text,
    publishDate: item?.pubDate?._text,
    imageUrl: item?.enclosure?._attributes?.url,
    subscriptionDescription: xmlObject?.rss?.channel?.title?._text,
  }));
}

export const getFeed = routeUtils.createRoute(async (req, res) => {
  return axios.get('http://www.nasa.gov/rss/dyn/educationnews.rss')
    .then((response) => xmlUtils.parse(response.data))
    .then(xmlToFeed);
});
