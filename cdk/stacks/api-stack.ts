import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export default class ApiStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
      const handler = new lambda.Function(this, "ApiHandler", {
        runtime: lambda.Runtime.NODEJS_12_X,
        code: lambda.Code.asset("api-function/dist"),
        handler: "handler.handler",
    });
  }
}
