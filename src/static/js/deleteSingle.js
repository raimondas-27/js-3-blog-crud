import MyFetch from './class/MyFetch.js';

const deleteBtn = document.querySelector("#delete");
const currentPageId = deleteBtn.dataset.postId
console.log(currentPageId);

deleteBtn.addEventListener("click", function (event) {
   event.preventDefault()
   console.log("again, do not play this again")
   MyFetch.deletePost(currentPageId,(ats) => {
      if (ats.redirect) {
         window.location = ats.redirect
      }
   })
})


//pasiimti mygtuka
//pasiimame id
//daryti fetch, jis gali buti tarp tu fetch

// prie base prideti api.blog/:id

console.log("single")