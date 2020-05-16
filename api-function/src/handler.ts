import awsServerlessExpress from 'aws-serverless-express';
import lambda from 'aws-lambda'
import app from './app';

const server = awsServerlessExpress.createServer(app());

exports.handler = async (event: lambda.APIGatewayProxyEvent, context: lambda.Context) => {
  return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise;
}
