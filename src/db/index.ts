import { FilterList } from '../../typings/filter-list';
import { IDatabaseInstance } from '../interfaces/database-instance.interface';
import { IDatabase } from '../interfaces/database.interface';

const coffeMachines = require('coffee-machines.json');
const coffePods = require('coffee-pods.json');

class DB implements IDatabase {
  private db: IDatabaseInstance;

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.db = {
      collections: {
        coffeMachines,
        coffePods,
      },
      async find(collection: string) {
        return this.instance[collection];
      },
      async findWithFilters(collection: string, filterList: FilterList) {
        return this.instance[collection];
      },
    };
  }

  public get instance() {
    if (!this.db) {
      this.initialize();
    }
    return this.db;
  }
}

export default DB;
