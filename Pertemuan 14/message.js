import helloWorld from "./HelloWorld.js";

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();
