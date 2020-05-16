import awsServerlessExpress from 'aws-serverless-express';
import lambda from 'aws-lambda'
import app from './app';

const server = awsServerlessExpress.createServer(app)

exports.handler = (event: lambda.APIGatewayProxyEvent, context: lambda.Context) => {
  awsServerlessExpress.proxy(server, event, context)
};
