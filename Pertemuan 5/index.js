//IIFE dan callback Function

// 1. IIFE (Immediately Invoked Function Expression)
//      self-executing

(function () {
  console.log("hello world");
})();

//with parameter & return value
let output = (function (fullName) {
  return "hello" + fullName;
})(" John Doe");

console.log(output);

//Callback Funtion

function greetings(callback) {
  callback();
}

//Function as args must be a anonymous function
greetings(function () {
  console.log("Hello Callback");
});

//bagaimana kalo callback ada parameter dan return value

function greetings(callback) {
  callback("John Doe");
}

//Function as args must be a anonymous function
greetings(function (fullName) {
  return "Hello" + fullName;
});

//Exercise 01
//

let hasil = (function (berat, tinggi) {
  return berat / (tinggi * tinggi);
})(90, 1.77);
function calculateBMI(berat, tinggi) {
  return berat / (tinggi * tinggi);
}

console.log(hasil > 25 ? "kelebihan berat badan" : "Berat badan anda normal");

let bmi = calculate(90, 1.77);
let kategori = bmi > 25 ? "Kelebihan berat badan" : "Berat badan anda normal";
console.log(kategori);

hitungBMI(function () {
  console.log("hitung bmi");
});

hitungBMI();
