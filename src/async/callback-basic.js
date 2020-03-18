/*
        Callback
    - function execute later in other function
    - function as parameter
 */

const a = () => console.log("hellow world")
const b = (callback) => {
    callback()
}
b(a)

const multiply = (num1, num2, callback) => {
    if(typeof callback == 'function'){
        return callback(num1 * num2)
    }
    return num1 * num2
}

/*
   Case : formatting -> currency, percentage
*/

const formatCurrency = num => `Rp ${num}`
const formatPercentage = num => `${num} %`
let result
result = multiply(20, 30, formatCurrency)
console.log(result)

result = multiply(4,20)
console.log(result)

console.log("-----")
const p1 = () => console.log("process 1");
const p2 = (callback) => {
    setTimeout(() => {
        console.log("process 2")
        callback()
    }, 10)
}
const p3 = () => console.log("process 3");

p1()
p2(p3) // async -> antrian 
// p3()