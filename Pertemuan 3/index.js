//Variable & Operator
//1. JavaScript Variable
//let & const
// let fullName = "John Doe"; //camel case
// let full_name = "John Doe"; //snake case
// let FullName = "John Doe"; //Pascal case

//ada 3 tipe data
//1. string = kumpulan karakter
// let gender = "Male"; //String
// const Gender = "Male"; //jika const maka tidak dapat diganti

//2. number
// let age = 30; //integer
// let weight = 96.6; //float
// let isMarried = true; //boolean
// let Grade = null; //
// let address; //undifined

// console.log(fullName, gender, age, weight, isMarried, Grade, address);

//2. Javascript Operator
//a. Arithmetic Operator (+,-,*,/,%,**)
// let bil1 = 20
// let bil2 = 5

// console.log(bil1 + bil2)//25
// console.log(bil1 - bil2)//15
// console.log(bil1 * bil2)//100
// console.log(bil1 / bil2)//
// console.log(bil1 % bil2)
// console.log(bil1 ** bil2)

//Buatlah Program yang menghitung luas sgitiga
//dimana alas adalah 5 dan tinggi adalah 5
//tampilkan hasilnya

//rumus luas segitiga
// x = 0.5;
// let alas = 5;
// let tinggi = 5;
// let luas = x * alas * tinggi;
// console.log(luas);

//b. Assignment Operator (=, +=, -=, *=, /=)
// let bilangan = 5;
// bilangan = bilangan + 10; //15
// bilangan += 5;

// console.log(bilangan);

//c. string operator (+)
// let firstName = "John"
// let lastName = "Doe"

// let fullName = firstName +" "+ lastName //tambahan string concatination
// console.log(fullName)

//d. Relational Operator (==,===,<=,>=,<,>,!=)
let bil1 = 10;
let bil2 = "10";

console.log(bil1 == bil2); // jika 2 sama dengan hanya mengecek nilai
console.log(bil1 === bil2); // jika 3 sama dengan maka dia akan mengecek nilai dan juga tipe data
console.log(bil1 > bil2);
console.log(bil1 < bil2);

//e. Logical operator (&&, ||, !)
console.log(true && true);
console.log(true || true);
console.log(!true);

//f. Ternary Operator (?, :)
let age = 18;
let isEligible = age >= 17 ? "bisa buat KTP" : "belum bisa buat KTP";

console.log(isEligible);

//mini exercise
//buat program yang menghitung BMI (Body mass index)
//BB/(TB*TB)
//tampilkan hasilnya jika BmI > 25 tampilkan kelebihan berat badan, BMI < 25 tampilkan Berat badan normal

let beratBadan1 = 50;
let tinggiBadan1 = 1.6;
let beratBadan2 = 20;
let tinggiBadan2 = 1.7;

let Jumlah1 = beratBadan1 / tinggiBadan1 ** 2;
let jumlah2 = beratBadan2 / tinggiBadan2 ** 2;
let BMI = Jumlah1 > 25 ? "Kelebihan berat badan" : "Berat badan normal";
let BMI2 = jumlah2 > 25 ? "Kelebihan berat badan" : "Berat badan normal";

console.log(BMI);
console.log(BMI2);
