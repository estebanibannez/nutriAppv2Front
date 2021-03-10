export class ListOf<T> {
  public collection: Array<T> = [];
  public length:number;
  /**
   *
   */
  constructor() {
     this.length = this.collection.length;

  }

}
