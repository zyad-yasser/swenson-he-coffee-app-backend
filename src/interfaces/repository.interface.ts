import { FilterList } from '../../typings/filter-list';

export interface IRepository {
  find: () => Promise<any[]>;
  findWithFilters: (filters: FilterList) => Promise<any[]>;
}
