//Array and Object

let students = ["John", "Bob", "Jane", "Jack"];
//dalam js array boleh beda-beda tipe datanya
let john = ["John", 30, true, [30, 40]];

let employees = new Array("John", "Bob", "Jane", "Jack");

console.log(students); //menampilkan semua array sekaligus
console.log(sudents[1]); //
students[1] = "Edgar";
console.log(students.length); //menampilkan panjang array

console.log(students[students.length - 1]);

//array method
let array = [1, 2, 3, "Hello", false, true];
//1. toString()
console.log(array.toString());
//2. Join()
console.log(array.join("-"));
console.log(array.join(" "));
console.log(array.join("#"));
//3. pop() - hapus element terakhir
array.pop();
console.log(array);
//4. push - tambah element terakhir
array.push("Selamat pagi");
console.log(array);
//5. shift()-hapus element pertama
array.shift();
console.log(array);
//6. unshift()
array.unshift("Selamat Pagi");
console.log(array);
//7. splice()
array.splice(3, 0, 4, 5);
console.log(array);
//8. slice
let numbers = array.slice(1, 5);
console.log(numbers);
//9. concat
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let num3 = [7, 8, 9];
let combineNum = num1.concat(num2, num3);
console.log(combineNum);

//Object
//Cara deklarasi object

let johnObj = {
  fullName: "John Doe",
  age: 30,
  isActive: true,
  grade: [90, 80, 100],
  address: {
    street: "Jl. Arnold Mononutu",
    city: "Minahasa Utara",
    province: "Sulawesi Utara",
  },

  sayHello: function () {
    console.log("Hello World");
  },
};

console.log(johnObj);
//Cara akses element dlm object
//Cara 1. Dot notation
console.log(johnObj.fullName);
johnObj.sayHello();
console.log(johnObj.address.street);
console.log(johnObj.grade[1]);
//Cara 2. Bracket notation
console.log(johnObj["fullName"]);
console.log(johnObj["grade"][1]);
console.log(johnObj["address"]["street"]); //nested object
johnObj["sayHello"](); //function

john.job = "Programmer"; //tambah properti baru
console.log(johnObj);

delete johnObj.isActive; // menghapus property dalam object
console.log(johnObj);
