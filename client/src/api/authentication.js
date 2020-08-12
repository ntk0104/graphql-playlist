import axios from 'axios';

export const loginApi = (email, password) => {
  return new Promise((resolve, reject) => {
    return axios({
      method: 'post',
      url: 'https://reqres.in/api/login',
      data: {
        email,
        password
      }
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
}
