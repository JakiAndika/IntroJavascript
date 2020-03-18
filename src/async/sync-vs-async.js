/*
        Synchronuos vs Asynchronuos
        urutan hasil eksekusi sebuah program oleh javascript
        Sync = blocking
        Async = non-blocking -> delay, ajax, DOM, local storage
*/

const p1 = () => console.log("process 1");
const p2 = () => {
    setTimeout(() => console.log("process 2"), 10)
}
const p3 = () => console.log("process 3");

p1()
p2() // async -> antrian 
p3()

// callback, promise, async/await