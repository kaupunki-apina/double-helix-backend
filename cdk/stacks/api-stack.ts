import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export default class ApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
      const handler = new lambda.Function(this, 'ApiHandler', {
        runtime: lambda.Runtime.NODEJS_12_X,
        code: lambda.Code.asset('api-function/dist'),
        handler: 'handler.handler',
      });

      const api = new apigateway.RestApi(this, 'helix-api', {
        restApiName: 'Helix API',
        description: 'Gateway for double helix mobile app',
      });

      api.root.addResource('api').addProxy({
        defaultIntegration: new apigateway.LambdaIntegration(handler),
        anyMethod: true,
      });
  }
}
