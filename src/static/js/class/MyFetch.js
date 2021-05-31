export default class MyFetch {
   static baseUrl = "/api/blog";
   constructor() {}


   static async getPosts() {
      const res = await fetch(MyFetch.baseUrl)
      // console.log(data)
      return res.json();
   }

   // static async createPost(data) {
   //
   // }
}