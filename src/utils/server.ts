import express from 'express';
import { sslConfig, appConfig } from '../config';
import { logger } from './logger';
import fs from 'fs';
import http from 'http';
import https from 'https';

const { keyPath, certPath } = sslConfig;
const { port, name: appName } = appConfig

const onListening = (appName: string, port: number|string) => () => {
  logger.info(`🚀 ${appName} is listening on ${port}`);
};

export const onErrorCb = (error: NodeJS.ErrnoException): void => {
  logger.info(error);
};

export const onListeningCb = onListening(appName, port);

export const createServer = (
  app: express.Application
): https.Server | http.Server => {
  if (keyPath && certPath) {
    try {
      const key = fs.readFileSync(keyPath);
      const cert = fs.readFileSync(certPath);
      return https.createServer(
        {
          key,
          cert,
        },
        app
      );
    } catch (error) {
      logger.info(`Problem with SSL configuration`);
    }
  }
  return http.createServer(app);
};
