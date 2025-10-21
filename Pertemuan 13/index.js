// Asynchronous Javascript

// Synchronous -> single thread -> blocking

// console.log('proses 1')
// console.log('proses 2')
// console.log('proses 3')
// console.log('proses 4')

//Asynchronous -> multi therad -> non blocking
// setTimeout(() => {
//   console.log("proses 1");
// }, 2000);
// setTimeout(() => {
//   console.log("proses 2");
// }, 5000);
// setTimeout(() => {
//   console.log("proses 3");
// }, 4000);
// setTimeout(() => {
//   console.log("proses 4");
// }, 1000);

// 1. Parallel
// setTimeout(() => {
//   console.log("proses 1");
// }, 2000);
// setTimeout(() => {
//   console.log("proses 2");
// }, 5000);
// setTimeout(() => {
//   console.log("proses 3");
// }, 4000);
// setTimeout(() => {
//   console.log("proses 4");
// }, 1000);

// // 2. concurrent
// setTimeout(() => {
//   console.log("proses 1");
//   setTimeout(() => {
//     console.log("proses 2");
//     setTimeout(() => {
//       console.log("proses 3");
//       setTimeout(() => {
//         console.log("proses 4");
//       }, 5000);
//     }, 5000);
//   }, 5000);
// }, 5000);

// //Promise
// let condition = true;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

// //cara menggunakan promise
// // 1. then - catch
// newPromise
//     .then((result) => `${result}!!!`)
//     .then((result2) => console.log(result2))
//     .catch((error) => console.log(error));

// // 2. Async/await
// // Harus buat didalam fungsi

// const getPromise = async() => {
//     const result =  await newPromise;
//     console.log(result)
// }

//simulasi fetch data API dari JSONP holder

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((json) => console.log(json))

// const getResponse = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await response.json();
//   json.forEach(({ name }) => console.log(name));
//   console.log(json);
// };

// getResponse();
