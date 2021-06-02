export default class MyFetch {
  static baseUrl = '/api/blog';

  constructor() {}

  static async getPosts() {
    const res = await fetch(MyFetch.baseUrl);
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

  static deletePost(deleteId, successCallback) {
    fetch(`${MyFetch.baseUrl}/${deleteId}`, {
      method : "DELETE",
      headers: {
        "content-type" : "application/json",
      },
    })
        .then((res) => res.json())
        .then((data) => successCallback(data))
        .catch((err) => console.error(err.message))
  }

}
