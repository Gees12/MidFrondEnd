let people = ["Greg", "Mary", "Devon", "James"];

// 1. For-loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2. forEach()
people.forEach(function (person) {
  console.log(person);
});

// 3. Remove "Greg"
people.shift();

// 4. Remove "James"
people.pop();

// 5. Add "Matt" to the front
people.unshift("Matt");

// 6. Add your name to the end
people.push("Your Name");

// 7. For-loop with break after logging "Mary"
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") break;
}

// 8. Copy the array using slice (exclude "Mary" and "Matt")
let newPeople = people.slice(2);
console.log(newPeople);

// 9. Redefine people using splice (remove "Devon", add "Elizabeth" and "Artie")
people = ["Matt", "Mary", "Devon", "Your Name"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people); // ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"]

// 10. Create a new variable withBob
let withBob = people.concat("Bob");
console.log(withBob); // Final Result

// Java Conditional & Loop
//1. JavaScript Conditional

let suhu = 30;
if (suhu >= 38) {
  console.log("Suhu diluar panas");
} else {
  console.log("Suhu diluar normal");
}
console.log("Selesai");

///if - else if - else

let umur = 2;
if (umur >= 0 && umur <= 5) {
  console.log("umur termasuk kategori balita");
} else if (umur >= 6 && umur <= 11) {
  console.log("umur termasuk kategori anak-anak");
} else if (umur >= 12 && umur <= 17) {
  console.log("umur termasuk kategori remaja");
} else if (umur >= 18 && umur <= 23) {
  console.log("umur termasuk kategori pemuda");
} else if (umur >= 24 && umur <= 40) {
  console.log("umur termasuk kategori dewasa");
} else if (umur >= 41) {
  console.log("umur termasuk kategori tua");
}

//2. JavaScript Loop
//1. for loop
for (let i = 0; 1 < 10; i++) {}
//2. while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//3. do-while loop
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

//Array built in method
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

for (let i = 1; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//forEach()
numbers.forEach(function (value) {
  console.log(value);
});

//map()

let output = numbers.map(function (value) {
  return value + 2;
});
console.log(output);

//filter()

let output1 = numbers.filter(function (value) {
  return value > 2;
});
console.log(output1);

//find()
let outputfind;
