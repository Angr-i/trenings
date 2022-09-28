const path = require('path');

console.log(path.join(__dirname,'..'));
const fullpath=path.resolve(__dirname);
console.log(path.parse(fullpath))
const siteURL='http://localhost:8088/users?id=5123'
const url = new URL(siteURL)
console.log(url)