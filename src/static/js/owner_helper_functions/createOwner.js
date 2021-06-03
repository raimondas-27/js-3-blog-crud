import MyFetchOwner from '../class/MyFetchOwner.js';

const mainOwnerForm = document.getElementById('create-owner-form');

mainOwnerForm.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Stop right there, dont you dare to send it, I swear to God');


  const fd = new FormData(mainOwnerForm);
  // form data to json conversija
  const fdJsonFormat = JSON.stringify(Object.fromEntries(fd));

  MyFetchOwner.createOwner(fdJsonFormat, (ats) => {
    console.log(ats);
    if (ats.redirect) {
      // console.log('redirecting to', ats.redirect);
      window.location = ats.redirect;
    }
  });
});