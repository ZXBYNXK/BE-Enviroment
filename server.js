// Server.js
let server;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Run practice/", (directory) => {
  switch (directory) {
    case "6-22-bh-b-e-setup":
      server = require("./practice/6-22-bh-b-e-setup/server");
      return server();

    default:
      console.log(`No server found in practice/${directory}`);
      return false;
  }
});
