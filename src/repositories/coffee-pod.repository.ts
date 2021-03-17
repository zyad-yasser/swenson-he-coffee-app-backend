import { FilterList } from '../../typings/filter-list';
import { IDatabase } from '../interfaces/database.interface';
import { IExternalDependencies } from '../interfaces/external-dependencies.interface';
import { IRepository } from '../interfaces/repository.interface';

export class CoffeePodRepository implements IRepository {
  private database: IDatabase;

  constructor({ database }: IExternalDependencies) {
    this.database = database;
  }

  public find = () => {
    return this.database.instance.find('CoffeePods');
  };

  public findWithFilters = (filters: FilterList) => {
    const collection = 'CoffeePods';
    return this.database.instance.findWithFilters(collection, filters);
  };

  public filters = () => {
    const collections = [
      'CoffeePodsProductTypes',
      'CoffeePodsFlavors',
      'CoffeePodsPackSizes',
    ];

    const collectionsDataPromises = collections.map(collection => this.database.instance.find(collection))
    return Promise.all(collectionsDataPromises);
  };
}
