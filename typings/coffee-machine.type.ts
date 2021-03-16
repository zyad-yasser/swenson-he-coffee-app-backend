type ProductTypeId = string;

export interface CoffeeMachine {
  id: string;
  sku: string;
  product_type: ProductTypeId;
  water_line: boolean;
}
