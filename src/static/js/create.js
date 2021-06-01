import MyFetch from "./class/MyFetch.js";

MyFetch.getPosts()
    .then(posts => console.log(posts))
    .catch(error => console.warn(error.message));

const newPostData = {
   title: "new post about birds",
   author: "Jane Megan",
   body: "this is essential to know",
}

const jsonData = JSON.stringify(newPostData);

MyFetch.createPost(jsonData, (data) => {
   if (data.redirect) {
      console.log("redirecting to", data.redirect)
      // window.location = data.redirect;
   }
});



