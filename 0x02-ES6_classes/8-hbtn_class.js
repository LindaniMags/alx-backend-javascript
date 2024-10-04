export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  [Symbol.toPrimitive](hc) {
    if (hc === "number") {
      return this.size;
    }
    if (hc === "string") {
      return this.location;
    }
    return this;
  }
}
