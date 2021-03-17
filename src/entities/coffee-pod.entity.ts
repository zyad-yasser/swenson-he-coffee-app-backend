import { CoffeeFlavorId, ICoffeePod, PackSizeId, ProductTypeId } from './../../typings/coffee-pod.type';
export class CoffeePod implements ICoffeePod {
    id: string;
    sku: string;
    coffee_flavor: CoffeeFlavorId;
    pack_size: PackSizeId;
    product_type: ProductTypeId;
  
    constructor(params: ICoffeePod) {
      Object.assign(this, params);
    }
  }