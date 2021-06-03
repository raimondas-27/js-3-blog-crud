console.log('edit');

import MyFetch from './class/MyFetch.js';

const editFrom = document.getElementById('edit-form');
const currentId = editFrom.dataset.postId;

editFrom.addEventListener('submit', (event) => {
   event.preventDefault();

   // supakuojam formos duomenis
   const fd = new FormData(editFrom);
   fd.append('_id', currentId);
   // form data to json conversija
   const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));

   MyFetch.updatePost(fdJsonFormat, (ats) => {
      if (ats.redirect) {
         window.location = ats.redirect
      }
   });
});

