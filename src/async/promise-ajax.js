const request = (url) => {
    return new Promise((resolved,reject) => {
        const MyAjax = new XMLHttpRequest()
        MyAjax.open("get", url)
        MyAjax.onreadystatechange = () => {
            if (MyAjax.readyState == 4) {
                resolved(MyAjax.response)
            }
        }
        MyAjax.send()
    })
}

const display = (data) => {
    console.log(data)
}
let url = "https://jsonplaceholder.typicode.com/users/1"
request(url)
.then(value => display(value))