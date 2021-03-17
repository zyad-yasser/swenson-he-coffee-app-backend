import { FilterList } from '../../typings/filter-list';
import { IDatabaseInstance } from '../interfaces/database-instance.interface';
import { IDatabase } from '../interfaces/database.interface';
import { logger } from '../utils/logger';

const CoffeeMachines = require('./data/coffee-machines.json');
const CoffeePods = require('./data/coffee-pods.json');

class DB implements IDatabase {
  public instance: IDatabaseInstance;

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.instance = {
      collections: {
        CoffeeMachines,
        CoffeePods,
      },
      find: async (collection: string) => {
        return this.instance.collections[collection];
      },
      findWithFilters: async (collection: string, filterList: FilterList) => {
        return this.instance.collections[collection];
      },
    };
    logger.info(`💽  Database initialized`);
  }
}

export default DB;
