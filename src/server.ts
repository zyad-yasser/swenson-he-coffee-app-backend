import { createServer, onListeningCb, onErrorCb } from './utils/server';
import { appConfig } from './config';
import 'dotenv/config';
import App from './app';

const { port } = appConfig;
const expressApp = new App();
const server = createServer(expressApp.app);

server.listen(port);
server.on('error', onErrorCb);
server.on('listening', onListeningCb);
