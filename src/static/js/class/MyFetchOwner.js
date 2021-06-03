export default class MyFetch {
   static baseUrl = '/api/owners';

   constructor() {
   }


   /**
    * method to create post
    *
    * @param {JSON} data // needs to be json format
    * @param successCallback
    */
   static createOwner(data, successCallback) {
      fetch(MyFetch.baseUrl, {
         method: 'POST',
         headers: {
            'content-type': 'application/json',
         },
         body: data,
      })
          .then((res) => res.json())
          .then((data) => successCallback(data))
          .catch((err) => console.error(err.message));
   }

   static deleteOwnerPost(deleteId, successCallback) {
      fetch(`${MyFetch.baseUrl}/${deleteId}`, {
         method: "DELETE",
         headers: {
            "content-type": "application/json",
         },
      })
          .then((res) => res.json())
          .then((data) => successCallback(data))
          .catch((err) => console.error(err.message))
   }
}