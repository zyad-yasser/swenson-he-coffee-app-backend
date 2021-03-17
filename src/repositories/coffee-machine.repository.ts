import { IDatabase } from '../interfaces/database.interface';
import { IExternalDependencies } from '../interfaces/external-dependencies.interface';
import { IRepository } from '../interfaces/repository.interface';

export class CoffeeMachineRepository implements IRepository {
  private database: IDatabase;

  constructor({ database }: IExternalDependencies) {
    this.database = database;
  }

  public find = () => {
    return this.database.instance.find('CoffeeMachines');
  };

  public findWithFilters = () => {
    return this.database.instance.find('CoffeeMachines');
  };
}
