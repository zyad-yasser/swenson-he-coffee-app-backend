import { FilterList } from '../../typings/filter-list';
import { IDatabaseInstance } from '../interfaces/database-instance.interface';
import { IDatabase } from '../interfaces/database.interface';
import { logger } from '../utils/logger';

const CoffeeMachines = require('./data/coffee-machines.json');
const CoffeeMachinesProductTypes = require('./data/coffee-machines-product-types.json');
const CoffeePods = require('./data/coffee-pods.json');
const CoffeePodsProductTypes = require('./data/coffee-pods-product-types.json');
const CoffeePodsFlavors = require('./data/coffee-pods-flavors.json');
const CoffeePodsPackSizes = require('./data/coffee-pods-pack-sizes.json');

class DB implements IDatabase {
  public instance: IDatabaseInstance;

  constructor() {
    this.initialize();
  }

  private getSubListWithOneFilter<T>(list: T[], key: string, value: any) {
    return list.filter(item => item[key] = value);
  }

  private devideAndFilter<T>(list: T[], filterList: FilterList) {
    let filteredList = [];

    for (const key in filterList) {
      const value = filterList[key];
      filteredList = this.getSubListWithOneFilter(list, key, value);
    }

    return filteredList;
  }

  private initialize() {
    this.instance = {
      collections: {
        CoffeeMachines,
        CoffeePods,
        CoffeePodsProductTypes,
        CoffeeMachinesProductTypes,
        CoffeePodsFlavors,
        CoffeePodsPackSizes,
      },
      find: async (collection: string) => {
        return this.instance.collections[collection];
      },
      findWithFilters: async (collection: string, filterList: FilterList) => {
        const list = this.instance.collections[collection];
        return this.devideAndFilter<any>(list, filterList);
      },
    };
    logger.info(`💽  Database initialized`);
  }
}

export default DB;
