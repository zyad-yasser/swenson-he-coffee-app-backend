export type ProductTypeId = string;

export interface ICoffeeMachine {
  id: string;
  sku: string;
  product_type: ProductTypeId;
  water_line: boolean;
}
