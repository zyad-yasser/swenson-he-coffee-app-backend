type ProductTypeId = string;
type PackSizeId = string;
type CoffeeFlavorId = string;

export interface CoffeePod {
  id: string;
  sku: string;
  coffee_flavor: CoffeeFlavorId;
  pack_size: PackSizeId;
  product_type: ProductTypeId;
}
