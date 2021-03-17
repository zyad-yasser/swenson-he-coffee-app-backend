import { FilterList } from '../../typings/filter-list';

export interface IDatabaseInstance {
  collections: any;

  find(collection: string): Promise<any[]>;
  findWithFilters(collection: string, filterList: FilterList): Promise<any[]>;
}
