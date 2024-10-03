export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  /**
  * @param {String} brand
  */
  set brand(brand) {
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  /**
  * @param {String} motor
  */
  set motor(motor) {
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  /**
  * @param {String} color
  */
  set color(color) {
    this._color = color;
  }

  static get [Symbol.variant]() {
    return this;
  }

  cloneCar() {
    const CarVariant = this.constructor[Symbol.variant];

    return new CarVariant();
  }
}
