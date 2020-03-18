fetch("https://jsonplaceholder.typicode.com/users/1")
.then(value => value.json()) // response object   
.then(result => console.log(result))