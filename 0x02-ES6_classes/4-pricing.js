import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amt) {
    if (typeof amt !== 'number') {
      throw new TypeError('Amount must be a Number');
    }
    this._amount = amt;
  }

  get amount() {
    return this._amount;
  }

  set currency(curr) {
    if (curr instanceof Currency) {
      this._currency = curr;
    } else {
      throw new TypeError('currency must be an instance of Currency');
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }

    return amount * conversionRate;
  }
}
