export class Employee {
  constructor(id, name, basic, da, hra) {
    this.id = id;
    this.name = name;
    this.basicPay = basic;
    this.hraPay = hra;
    this.daPay = da;
  }
  calculateSalary() {
    return this.basicPay + this.daPay + this.hraPay;
  }
}
