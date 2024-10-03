export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  /**
  * @param {String} size
  */
  set size(size) {
    this._size = size;
  }

  get location() {
    return this._location;
  }

  /**
  * @param {String} location
  */
  set location(location) {
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
