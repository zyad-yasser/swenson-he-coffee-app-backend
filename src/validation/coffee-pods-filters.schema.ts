import Joi from 'joi';

export const coffeePodsFiltersSchema: Joi.ObjectSchema = Joi.object({
  sku: Joi.string().optional(),
  id: Joi.number().optional(),
  product_type: Joi.number().optional(),
  coffee_flavor: Joi.number().optional(),
  pack_size: Joi.number().optional(),
});
