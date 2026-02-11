import { employees } from "../data/employees";

export class EmployeeManager {
  /**
   * method to add a new employee object on the data storage
   * @param {*} emp represents an employee object to be added
   * @returns boolean (true/false) depending on the success of failure of adding the employee in the data storage
   */
  add(emp) {
    let exists = false;
    if (employees.length > 0) {
      for (const e of employees) {
        if (e.id === emp.id) {
          exists = true;
          break;
        }
      }
    }
    if (!exists) {
      employees.push(emp);
      return true;
    }
    else
      return false;
  }
  /**
   * method to search for an employee given the id of the employee
   * @param {*} id of the employee to search
   * @returns an employee or null
   */
  get(id) {
    let found = null;
    // if (employees.length > 0) {
    //   for (const e of employees) {
    //     if (e.id === id) {
    //       found = e;
    //       break;
    //     }
    //   }
    // }
    if (employees.length > 0) {
      found = employees.find(e => e.id === id)
    }
    return found;
  }
  /**
   * method to fetch all employee
   * @returns an array of employees
   */
  getAll() {
    if (employees.length > 0)
      return [...employees];
    else
      return [];
  }
  /**
   * method to update an existing employee in the data storage given the id of the employee and the updated employee data
   * @param {*} emp represents the updated employee data
   * @param {*} id of the employee to update
   * @returns boolean (true/false) based on the success/failure of the operation
   */
  update(emp, id) {
    let found = null;
    let foundIndex = -1;
    if (employees.length > 0) {
      for (const index in employees) {
        const e = employees[index];
        if (e.id === id) {
          found = e;
          foundIndex = index;
          break;
        }
      }
    }

    if (found !== null && foundIndex !== -1) {
      employees.splice(foundIndex, 1, emp);
      return true;
    }
    else
      return false;
  }

  /**
   * method to delete an existing employee in the data storage given the id of the employee
   * @param {*} id of the employee to update
   * @returns boolean (true/false) based on the success/failure of the operation
   */
  remove(id) {
    let foundIndex = -1;
    if (employees.length > 0) {
      for (const index in employees) {
        const e = employees[e];
        if (e.id === id) {
          foundIndex = index;
          break;
        }
      }
    }
    if (foundIndex !== -1) {
      employees.splice(foundIndex, 1);
      return true;
    }
    else
      return false;
  }
}
