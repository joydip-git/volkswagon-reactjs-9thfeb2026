import { Employee } from "./employee";

export class Developer extends Employee {
  constructor(id, name, basic, da, hra, incentive) {
    super(id, name, basic, da, hra);
    this.incentivePay = incentive;
  }
  calculateSalary() {
    return super.calculateSalary() + this.incentivePay;
  }
}
