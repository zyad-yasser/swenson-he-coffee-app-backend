import Joi from 'joi';

export const coffeeMachinesFiltersSchema: Joi.ObjectSchema = Joi.object({
  sku: Joi.string().optional(),
  id: Joi.number().optional(),
  product_type: Joi.number().optional(),
  water_line: Joi.boolean().optional(),
});
