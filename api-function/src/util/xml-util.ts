import parser from 'xml-js';

export const parse = (xmlString: string) => {
  return parser.xml2js(xmlString, { compact: true });
};