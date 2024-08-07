const os = require('os');

// OS Type and Platform
// console.log('OS Type:', os.type()); // e.g., 'Darwin'
// console.log('Platform:', os.platform()); // e.g., 'darwin'
// console.log('Architecture:', os.arch()); // e.g., 'arm64'

// // // System Uptime
// console.log('System Uptime:', os.uptime(), 'seconds');

// // // System Memory
// console.log('Total Memory:', os.totalmem(), 'bytes');
// console.log('Free Memory:', os.freemem(), 'bytes');

// // // CPU Information
// // console.log('CPU Info:', os.cpus());

// // //  Retrieving User Information

// // // User Info
// console.log('User Info:', os.userInfo());

// // // Home Directory
// console.log('Home Directory:', os.homedir());

// // Managing Environment Variables
// // Retrieve an Environment Variable
// console.log('PATH:', process.env.PATH);

// // Set an Environment Variable
process.env.MY_PLACE = 'MANGALURU';
console.log('MY_PLACE:', process.env.MY_PLACE);

console.log('Env:', process.env);
// // Working with File System
// // File System Constants
console.log('File System Constants:', os.constants);

// // Temporary Directory
console.log('Temporary Directory:', os.tmpdir());

