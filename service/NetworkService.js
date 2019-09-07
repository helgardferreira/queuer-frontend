class NetworkService {

  get(endpoint) {
    var url = new URL(endpoint)

    return fetch(url, {
        method: "GET"
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      })
      .catch(error => console.error(error));
  }

}

export default NetworkService;