export default class MyFetchBlog {
  static baseUrl = '/api/blog';

  constructor() {}

  static async getPosts() {
    const res = await fetch(MyFetchBlog.baseUrl);
    const data = await res.json();
    // console.log(data)
    return data;
  }

  /**
   * method to create post
   *
   * @param {JSON} data // needs to be json format
   * @param successCallback
   */
  static createPost(data, successCallback) {
    fetch(MyFetchBlog.baseUrl, {
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

  static deletePost(deleteId, successCallback) {
    fetch(`${MyFetchBlog.baseUrl}/${deleteId}`, {
      method : "DELETE",
      headers: {
        "content-type" : "application/json",
      },
    })
        .then((res) => res.json())
        .then((data) => successCallback(data))
        .catch((err) => console.error(err.message))
  }

  static updatePost(data, successCallback) {
    console.log('updatePost');
    fetch(MyFetchBlog.baseUrl, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => successCallback(data))
      .catch((err) => console.error(err.message));
  }
}
