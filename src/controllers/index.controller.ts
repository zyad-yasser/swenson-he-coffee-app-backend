import { NextFunction, Request, Response } from 'express';
import { appConfig } from '../config';

const { version, name: appName } = appConfig;

class IndexController {
  public index = (_: Request, res: Response, next: NextFunction): void => {
    try {
      const message = `Welcome to ${appName}`;
      res.status(200).json({
        message,
        version,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
