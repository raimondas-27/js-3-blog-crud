import MyFetchOwner from '../class/MyFetchOwner.js';
console.log("edit")
const editOwnerFrom = document.getElementById('edit-owner-form');
const currentId = editOwnerFrom.dataset.postId;

editOwnerFrom.addEventListener('submit', (event) => {
   event.preventDefault();

   // supakuojam formos duomenis
   const fd = new FormData(editOwnerFrom);
   fd.append('_id', currentId);
   // form data to json conversija
   const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));
   console.log(fdJsonFormat)
   MyFetchOwner.updateOwner(fdJsonFormat, (ats) => {
      if (ats.redirect) {
         window.location = ats.redirect
      }
   });
});