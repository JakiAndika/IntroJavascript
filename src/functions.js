// => Function Declaration
hello("mario");
function hello(name) {
    console.log("hello " + name);
}


function multyply(a, b) {
    return a * b
}

let result = multyply(3, 2)
console.log(result)

// => Function Expression
const hello2 = function hello(name) {
    console.log("hello " + name);
}
hello2("bros");

// => Arrow Function
const hello3 = name => {
    console.log("hello " + name);
};
hello3("John");

const multyply2 = (a, b = 1) => a * b;


console.log(multyply2(4, 5));


// => IIFE --> autorunb
(function () {
    console.log('auto execute');
}());

