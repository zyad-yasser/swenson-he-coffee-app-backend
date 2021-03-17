export type ProductTypeId = string;
export type PackSizeId = string;
export type CoffeeFlavorId = string;

export interface ICoffeePod {
  id: string;
  sku: string;
  coffee_flavor: CoffeeFlavorId;
  pack_size: PackSizeId;
  product_type: ProductTypeId;
}
