//Rest Parameter & Spread Operator (....)
//1. Rest Parameter

const funct1 = (param1, param2, ...rest) => {
  //Rest parameter harus ada di akhit
  //let array = [param1,param2,param3,param4,param5];
  let result = 0;
  rest.forEach((item) => (result += item));
  console.log(result);
};

funct1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//2. spread operator
//Berkaitan Dengan array dan object

const numbers = [1, 2, 3, 4, 5];
console.log(...numbers);

//kegunaan spread operator pada array

//1. Duplikasi array
//let numbers2 = numbers; //bukan cara yang tepat
//numbers.push(6)
//console.log(numbers2)

let numbers2 = [...numbers]; //cara yang lebih baik
numbers2.push(6);
console.log(numbers2);

//2. menggabungkan array,
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];

let combineNum1 = num1.concat(num2, num3);
let combineNum2 = [...num1, ...num2, ...num3];
console.log(combineNum1);
console.log(combineNum2);

//kegunaan spread operator pada object
//1. duplikasi object

const student1 = {
  fullName: "John",
  status: "active",
};

const student2 = { ...student1, address: "manado" };
console.log(student2);

//2. menggabingkan object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combineObj = { ...obj1, ...obj2 };
console.log(combineObj);
