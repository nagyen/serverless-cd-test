import * as awsServerlessExpress from 'aws-serverless-express';
import * as app from './main';
const server = awsServerlessExpress.createServer(app);
exports.nestjs = (event, context) => awsServerlessExpress.proxy(server, event, context)