const anilObj = {
  id: 1,
  name: "anil",
  salary: 1000,
};

// const idValue = anilObj.id;
// const salaryValue = anilObj.salary;

// const { id: idValue, salary: salaryValue } = anilObj;
// console.log(`id:${idValue} and salary:${salaryValue}`);

//const { id: id, salary: salary } = anilObj;
const { id, salary } = anilObj;
console.log(`id:${id} and salary:${salary}`);

const numbers = [10, 20, 30, 40, 50];

// const second = numbers[1];
// const fourth = numbers[3];

const [, second, , fourth] = numbers;
console.log(second, fourth);

const employees = [
  {
    id: 1,
    name: "anil",
    projects: [
      {
        id: 100,
        name: "SITA",
      },
      {
        id: 101,
        name: "COB",
      },
    ],
  },
  {
    id: 2,
    name: "sunil",
    projects: [
      {
        id: 200,
        name: "XYZ",
      },
      {
        id: 201,
        name: "ABC",
      },
    ],
  },
];

//name of the 2nd project as well as the name of the 2nd employee
const [
  ,
  {
    name: secondName,
    projects: [, { name: secondProjName }],
  },
] = employees;

// const seName = employees[1].name;
// const seProj = employees[1].projects[1].name;

console.log(secondName, secondProjName);
