import {
  ICoffeeMachine,
  ProductTypeId,
} from './../../typings/coffee-machine.type';
export class CoffeeMachine implements ICoffeeMachine {
  public id: string;
  public sku: string;
  public product_type: ProductTypeId;
  public water_line: boolean;

  constructor(params: ICoffeeMachine) {
    Object.assign(this, params);
  }
}
