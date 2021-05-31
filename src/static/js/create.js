import MyFetch from "./class/MyFetch.js";

MyFetch.getPosts()
    .then(posts => console.log(posts))
    .catch(error => console.warn(error.message));


//get all form data into json object and send it  back via fetch



