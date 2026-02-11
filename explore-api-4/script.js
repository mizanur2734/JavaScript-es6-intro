const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        displaypost(data)
    })
}

const displaypost = (posts) =>{
    posts.forEach(post => {
        console.log(post)
    })
}