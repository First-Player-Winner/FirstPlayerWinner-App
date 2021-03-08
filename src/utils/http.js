import axios from 'axios';
// require('dotenv').config();

// const url_da_api = 'empreendedorismoufpi.com.br/api/v1';

const url_da_api = 'google.com';

axios.defaults.baseURL = `http://${url_da_api}`;

axios.interceptors.request.use(
  request => {
    const headers = {
      locale: 'pt-br',
      accept: 'application/json',
      'Content-Type': 'application/json'
    //   Authorization: store.getState().auth.accesstoken,
    };

    if (request.url.includes('files')) {
      headers.accept = '*/*'
      headers.ContentType = 'multipart/form-data'
    }

    request.headers = headers;
    return request;
  },
  err => {
    Promise.reject(err);
});
  

export default axios;