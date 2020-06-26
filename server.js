// Server.js
let server;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Run dir: practice/", (directory) => {
  //   if (server) return server();
  switch (directory) {
    case "6-22-bh-b-e-setup":
      server = require("./practice/6-22-bh-b-e-setup/server");
      return server();

    case "6-25-bh-b-e-v1":
      server = require("./practice/6-25-bh-b-e-v1/server");
      return server();

    default:
      console.log(
        `No server found in practice/${directory}\nNOTE: Must add to switch function in ./server.js in relation to the format allready in place.`
      );
      return false;
  }
});
