import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  /**
  * @param {Number} range
  */
  set range(range) {
    this._range = range;
  }

  cloneCar() {
    const CarVariant = super.constructor[Symbol.variant];

    return new CarVariant();
  }
}
