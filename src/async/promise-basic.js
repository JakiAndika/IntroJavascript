/*
                Promise
    Callback hell
        Promise :
            Pending ( sedang dalam proses )
            Fulfilled ( berhasil )
            Rejected ( gagal )
*/


// Promise Creator
const janji = () => (
    new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved('promise resolved')
        }, 10);
        // reject('promised rejected')
    })
)

// Promise Consumer 
janji()
    .then(value => console.log(value))
    .catch(err => console.log(err))