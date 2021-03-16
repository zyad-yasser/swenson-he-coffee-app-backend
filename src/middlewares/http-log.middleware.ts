import { Request, Response, NextFunction } from 'express';
import moment from 'moment';
import { logger } from '../utils/logger';

const nowDataFormatted = () => {
  const now = new Date();
  return moment(now).format('YYYY-MM-DD hh:mm:ss');
}

const onResponseFinish = (req: Request, res: Response) => () => {
  const { statusCode } = res;
  const { method, url, body, query, params } = req;
  const formattedDate = nowDataFormatted();
  const log = `[${formattedDate}] ${method}:${url} ${statusCode}`;
  logger.info(log);
  console.log({ body: JSON.stringify(body), query, params });
}

const httpLogger = (req: Request, res: Response, next: NextFunction) => {
  res.on('finish', onResponseFinish(req, res))
  next();
};

export default httpLogger;