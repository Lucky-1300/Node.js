const fs = require('fs');
fs.writeFileSync('student.txt','Name: Lucky, Course: BCA');
const data = fs.readFileSync('student.txt','utf8');
console.log(data);