import MyFetch from './class/MyFetch.js';

const deleteBtn = document.querySelector("#delete");
const currentPageId = deleteBtn.dataset.postId

deleteBtn.addEventListener("click", function (event) {
   event.preventDefault()
   console.log("again, do not play this again")
   MyFetch.deletePost(currentPageId,(ats) => {
      if (ats.redirect) {
         window.location = ats.redirect
      }
   })
})

