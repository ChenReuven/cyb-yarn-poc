console.log("Package 2 starting...");

const {
    double,
    greet
} = require("package1");

console.log(double(2));
console.log(greet());