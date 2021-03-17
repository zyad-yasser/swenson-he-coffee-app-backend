import { NextFunction, Request, Response } from 'express';

export interface IController {
  list: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  listWithFilters: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
