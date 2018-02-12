
import * as express from 'express';
import * as cors from 'cors';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

const server = express();
server.use(cors());

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule, server);
	app.setGlobalPrefix('nestjs');
	await app.listen(8080);
}
bootstrap();

module.exports = server;
