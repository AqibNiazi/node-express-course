//working with OS module
const os = require("os");

// Get user info
const user = os.userInfo();
console.log(user);

//Get system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

//Getting current OS info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
