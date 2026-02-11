import { Developer } from "./models/developer";
import { Hr } from "./models/hr";
import { EmployeeManager } from "./services/employee-manager";

function getEmployeeChoice() {
  alert("1. create developer \n2. create hr");
  const empChoice = Number(prompt("enter choice[1/2/]: "));
  return empChoice;
}

function createEmployee(empChoice) {
  const id = Number(prompt("enter id: ", "0"));
  const name = prompt("enter name: ", "");
  const basic = Number(prompt("enter basic: ", "0"));
  const da = Number(prompt("enter da: ", "0"));
  const hra = Number(prompt("enter hra: ", "0"));

  let employee = null;
  switch (empChoice) {
    case 1:
      const incentive = Number(prompt("enter incentive: ", "0"));
      employee = new Developer(id, name, basic, da, hra, incentive);
      break;

    case 2:
      const gratuity = Number(prompt("enter gratuity: ", "0"));
      employee = new Hr(id, name, basic, da, hra, gratuity);
      break;

    default:
      break;
  }
  return employee;
}

window.alert("1. get all \n2. get \n3. add \n4. update \n5. delete");
const choice = Number(window.prompt("enter choice[1/2/3/4/5]: ", "0"));
const manager = new EmployeeManager();

switch (choice) {
  case 1:
    const all = manager.getAll();
    if (all.length > 0) {
      for (const e of all) {
        console.log(e);
      }
    }
    else
      console.log("no records");
    break;

  case 2:
    const id = Number(window.prompt("enter an id to fetch employee", "0"));
    const emp = manager.get(id);
    if (emp !== null)
      console.log(emp);
    else
      console.log("no such record exists");
    break;

  case 3:
    const empChoice = getEmployeeChoice();
    const employee = createEmployee(empChoice);
    const addStatus = manager.add(employee);
    console.log(addStatus ? "added" : "failed");
    console.log(manager.getAll());
    break;

  case 4:
    const idToDelete = Number(prompt("enter an id to delete employee", "0"));
    const deleteStatus = manager.remove(idToDelete);
    console.log(deleteStatus ? "deleted" : "failed");
    break;

  case 5:
    const idToUodate = Number(prompt("enter an id to update employee", "0"));
    const updatedEmployee = null
    const updateStatus = manager.update(updatedEmployee, idToUodate);
    console.log(updateStatus ? "updated" : "failed");
    break;

  default:
    alert('enter proper choice...')
    break;
}
