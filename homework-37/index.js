"use strict";

const errorHandler = response => {
  if (!response.ok) {
    throw new Error("Response was not ok");
  }

  return response.json();
}

const catchHandler = error => console.error("There was a problem with fetch request:", error);

const postTemplate = post => `
  <h2>Post</h2>
  <div><strong>ID:</strong> ${post.id}</div>
  <div><strong>Title:</strong> ${post.title}</div>
  <div><strong>Body:</strong> ${post.body}</div>
  <br>
  <button type="button" id="load-comments">Get all comments</button>
`;

const commentsTemplate = comment => `
   <div class="comment-item">
    <div><strong>Name:</strong> ${comment.name}</div>
    <div><strong>Email:</strong> ${comment.email}</div>
    <div><strong>Body:</strong> ${comment.body}</div>
  </div>
`;

const getPost = postId => {
  const URL = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  return fetch(URL)
    .then(errorHandler)
}

const getComments = postId => {
  const URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  return fetch(URL)
    .then(errorHandler)
}

const init = () => {
  const form = document.getElementById("weather-form");

  if (!form) return false;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const postId = e.target.getElementsByClassName("form-control")[0].value;
    const postContainer = document.getElementById("post-container");

    getPost(postId)
      .then(response => {
        postContainer.innerHTML = postTemplate(response);
        postContainer.insertAdjacentHTML("afterend", `<br><hr><div id="comments-container"></div>`);

        const loadCommentsBtn = document.getElementById("load-comments");
        loadCommentsBtn.addEventListener("click", () => {
          getComments(postId)
            .then(response => {
              const commentsContainer = document.getElementById("comments-container");
              commentsContainer.innerHTML = "<h2>Comments</h2>"

              response.forEach(comment => commentsContainer.innerHTML += commentsTemplate(comment));
            })
            .catch(catchHandler)
        })
      })
      .catch(catchHandler)
  });
}

document.addEventListener("DOMContentLoaded", init);