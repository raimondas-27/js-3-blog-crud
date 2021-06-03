console.log('edit');

import MyFetchBlog from '../class/MyFetchBlog.js';

const editFrom = document.getElementById('edit-form');
const currentId = editFrom.dataset.postId;

editFrom.addEventListener('submit', (event) => {
   event.preventDefault();

   // supakuojam formos duomenis
   const fd = new FormData(editFrom);
   fd.append('_id', currentId);
   // form data to json conversija
   const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));

   MyFetchBlog.updatePost(fdJsonFormat, (ats) => {
      if (ats.redirect) {
         window.location = ats.redirect
      }
   });
});

