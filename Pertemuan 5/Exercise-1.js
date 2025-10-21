let hasil = (function (berat, tinggi) {
  return berat / (tinggi * tinggi);
})(60, 1.77);
console.log(hasil > 25 ? "kelebihan berat badan" : "Berat badan anda normal");

//callback
function hitungBMI(berat, tinggi, callback) {
  let output = berat / (tinggi * tinggi);
  return callback(output);
}

let output2 = hitungBMI(60, 1.77, function (output) {
  let hasil = output > 25 ? "kelebihan berat badan" : "berat badan normal";
  return "BMI = " + output + ", hasil :" + hasil;
});

console.log(output2);
