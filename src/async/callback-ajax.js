/*
        Callback Ajax
    Target : https://jsonplaceholder.typicode.com/users/1
*/

const request = (url, callback) => {
    const MyAjax = new XMLHttpRequest()
    MyAjax.open("get", url)
    MyAjax.onreadystatechange = () => {
        if (MyAjax.readyState == 4) {
            callback(MyAjax.response)
        }
    }
    MyAjax.send()

}

const display = (data) => {
    console.log(data)
}
let url = "https://jsonplaceholder.typicode.com/users/1"
request(url, display)