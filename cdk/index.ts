#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ApiStack }from './stacks';

const app = new cdk.App();
new ApiStack(app, 'ApiStack', { 
  env: {
    account: process.env.AWS_ACCOUNT_ID,   
    region: process.env.AWS_REGION,
  }
});
