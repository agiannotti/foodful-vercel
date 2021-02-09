import config from '../config';
const ResourceURL = `${config.API_ENDPOINT}/resources`;
const CommentURL = `${config.API_ENDPOINT}/comments`;
const Authorization = `Bearer ${config.API_KEY}`;

const FoodfulApiService = {
  getResources() {
    return fetch(ResourceURL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  postNewResource(title, content, zipcode) {
    const resource = {
      title,
      content,
      zipcode,
    };
    return fetch(ResourceURL, {
      method: 'POST',
      body: JSON.stringify(resource),
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  getById(id) {
    return fetch(`${ResourceURL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  deleteById(id) {
    return fetch(`${ResourceURL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
    }).then((res) => {
      return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
    });
  },

  patchResource(resource, id) {
    return fetch(`${ResourceURL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(resource),
      headers: {
        'Content-type': 'application/json',
        Authorization: Authorization,
      },
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
    });
  },
}



export default FoodfulApiService;
