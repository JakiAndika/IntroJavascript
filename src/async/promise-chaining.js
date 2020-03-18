/**
  Promise Chaining
  https://jsonplaceholder.typicode.com/posts/1
 */

let base_url = "https://jsonplaceholder.typicode.com/posts/1";
const getPost = id => fetch(`${base_url}posts/${id}`)
const getAuthor = id => fetch(`${base_url}users/${id}`)

getPost(1)
    .then(postResponse => postResponse.json())
    .then(postResult =>
        getAuthor(postResult.userId)
            .then(authorResponse => authorResponse.json())
            .then(authorResult => {
                console.log(postResult)
                console.log(authorResult)
            })
    )