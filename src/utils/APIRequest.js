const APIRequest = {
  request: function (method, url, body) {
    let config = {
      method: method,
      headers: { "Content-Type": "application/json" },
    };
    if (body !== "") {
      config = { ...config, body };
    }
    return fetch(url, config).then((response) => response.json());
  },
};

export default APIRequest;
