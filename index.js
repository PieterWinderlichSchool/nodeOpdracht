let myModule = require("./myModule.js");
let fs = require("fs");
console.log("hallo wereld");
myModule.myFunction();
myModule.otherFunction();

fs.writeFile("message.txt", "nou moe , wat is dit dan gap?" , () =>{
  console.log("klaar");
})
