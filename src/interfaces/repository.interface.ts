export interface IRepository {
  find: () => any[];
  findWithFilters: () => any[];
}

