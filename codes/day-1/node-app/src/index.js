class Person {
  #_id;
  #_name;
  #_salary;
  constructor(idVal, nameVal, salaryVal) {
    this.#_id = idVal;
    this.#_name = nameVal;
    this.#_salary = salaryVal;
  }
  get id() {
    return this.#_id;
  }
  set id(val) {
    this.#_id = val;
  }
  get name() {
    return this.#_name;
  }
  set name(val) {
    this.#_name = val;
  }
  get salary() {
    return this.#_salary;
  }
  set salary(val) {
    this.#_salary = val;
  }
  print() {
    return `Name=${this.#_name}, Id=${this.#_id}, Salary=${this.#_salary}`;
  }
}

class Trainer extends Person {
  #_subject;
  constructor(idVal, nameVal, salaryVal, subjectVal) {
    super(idVal, this.name, salaryVal);
    this.#_subject = subjectVal;
  }
  get subject() {
    return this.#_subject;
  }
  set subject(val) {
    this.#_subject = val;
  }
  print() {
    return `${super.print()}, Subject=${this.#_subject}`;
  }
}
