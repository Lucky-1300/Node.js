// Task 4: Display System Information
// Easy

// Goal: Practice the built-in os module.
// - Display your computer's operating system.
// - Display the computer's hostname.
// - Display the total system memory in bytes.
// Hint: Explore os.type(), os.hostname(), and os.totalmem()

const os = require('os');
console.log("operating system",os.type());
console.log("Hostname:",os.hostname());
console.log("Total Memory:",os.totalmem(),"bytes");