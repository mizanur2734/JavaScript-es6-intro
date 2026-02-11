const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};
//-----------------------------------------------------
const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      displaypost(data);
    });
};

const displaypost = (posts) => {
  // get the container
  const postContainer = document.getElementById("post-container");
  // console.log(postContainer)
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // console.log(post.title)

    // create a html element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
            <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
    // console.log(postCard)

    // append the element to the container
    postContainer.appendChild(postCard);
  });
};

loadPost();
