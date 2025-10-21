function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}

export default helloWorld;

// 1. Mengapa kita perlu menambahkan await di dalam messages?
// 2. Apa yang terjadi jika await dihapus?
// 3. Mengapa kita perlu menggunakan export dan import di sini?

//helloWorld() adalah fungsi yang mengembalikan Promise, dan await digunakan untuk menunggu hasil Promise tersebut sebelum lanjut ke baris berikutnya.
//Tanpa await, msg akan berisi Promise, bukan hasil akhirnya ("Hello World!"). Jadi console.log(msg) akan mencetak Promise, bukan nilai string.
