//JavaScript function

//1. function declaration
//Fungsi yand berdiri sendiri
// function namaFungsi() {
//   //Code yang akan dijalankan
// }

//Contoh:
// function greetings() {
//   console.log("Hello World");
// }

// greetings(); // call function

// //2. function expression
// let greetings2 = function () {
//   console.log("Hello World 2");
// };

// greetings2();

//Function with return value (output) and argument (input)
// function greetings(fullName){  //parameter
//     return "Hello" + fullName
// }

// //    argumen
// let output = greetings("John Doe")
// console.log(output)

// const greetings2 = function (fullName){
//     return "Hello" + fullName
// }
// let output2 = greetings2("John Doe")
// console.log(output2)

//global, local. block scope variable
// let x = 10 //global variable
// console.log(x)
// function func1(){
//     let y= 20 //local varable
//     console.log(x)
//     if(true){
//         let z= 30 //block variable
//         console.log(x)
//         console.log(y)
//         console.log(z)
//     }
// }
// func1()

//mini excercise
function calculateBMI(berat, tinggi) {
  return berat / (tinggi * tinggi);
}

let bmi = calculate(90, 1.77);
let kategori = bmi > 25 ? "Kelebihan berat badan" : "Berat badan anda normal";
console.log(kategori);

//pelajari dirumah tentang IIFE & callback function
