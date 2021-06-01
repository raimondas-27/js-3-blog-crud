export default class MyFetch {
   static baseUrl = "/api/blog";

   constructor() {}


   static async getPosts() {
      const res = await fetch(MyFetch.baseUrl)
      // console.log(data)
      return res.json();
   }

   /**
    *
    * @param {string} data //needs to be json format
    * @param successCallback
    */

   static createPost(data,successCallback) {
      fetch(MyFetch.baseUrl, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: data
      })
          .then((response) => response.json())
          .then((data) => successCallback(data))
          .catch((error) => console.warn(error.message))
   }
}
