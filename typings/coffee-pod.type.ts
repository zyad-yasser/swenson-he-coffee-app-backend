export type ProductTypeId = number;
export type PackSizeId = number;
export type CoffeeFlavorId = number;

export interface ICoffeePod {
  id: string;
  sku: string;
  coffee_flavor: CoffeeFlavorId;
  pack_size: PackSizeId;
  product_type: ProductTypeId;
}
