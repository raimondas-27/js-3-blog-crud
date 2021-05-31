import MyFetch from "./class/MyFetch.js";

MyFetch.getPosts()
    .then(posts => console.log(posts))
    .catch(error => console.warn(error.message));

