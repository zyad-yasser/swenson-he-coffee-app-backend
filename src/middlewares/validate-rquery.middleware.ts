import { Schema } from 'joi';
import { Request, Response, NextFunction } from 'express';

export const validateQuery = (validationSchema: Schema) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { query } = req;
  const { error } = validationSchema.validate(query, { abortEarly: false });
  if (error) {
    const message = error.details[0].message.replace(/\"/g, '');
    res
      .status(422)
      .send({ message });
  } else {
    next();
  }
};
