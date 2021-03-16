const coffeMachines = require('coffee-machines.json');
const coffePods = require('coffee-pods.json');

class DB {
  private db: any;

  constructor() {
    this.initialize();
  }

  private initialize() {
    this.db = {
      coffeMachines,
      coffePods,
    };
  }

  // private constructIndex(collection) {
    /** */
  // }

  public get instance() {
    if (!this.db) {
      this.initialize();
    }
    return this.db;
  }
}
