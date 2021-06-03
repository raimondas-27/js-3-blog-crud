import MyFetchOwner from '../class/MyFetchOwner.js';

const deleteOwnerBtn = document.querySelector("#deleteOwner");
const currentPageId = deleteOwnerBtn.dataset.postId

deleteOwnerBtn.addEventListener("click", function (event) {
   event.preventDefault()
   console.log("again, do not play this again")
   MyFetchOwner.deleteOwnerPost(currentPageId,(ats) => {
      if (ats.redirect) {
         window.location = ats.redirect
      }
   })
})