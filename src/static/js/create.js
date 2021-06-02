import MyFetch from './class/MyFetch.js';

const mainForm = document.getElementById('create-post-form');

mainForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Stop right there, dont you dare to send it, I swear to God');

  // supakuojam formos duomenis
  const fd = new FormData(mainForm);
  // form data to json conversija
  const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));

  MyFetch.createPost(fdJsonFormat, (ats) => {
    console.log(ats);
    if (ats.redirect) {
      // console.log('redirecting to', ats.redirect);
      window.location = ats.redirect;
    }
  });



});


