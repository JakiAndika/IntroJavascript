const sum = (...allNums) => {
    let total = 0
    allNums.forEach(num => total = total + num);
    return total;

}

const multyply = (a, b = 1) => a * b;
export { sum, multyply };