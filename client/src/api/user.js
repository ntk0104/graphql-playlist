import axios from 'axios';

export const listStudentApi = () => {
  return new Promise((resolve, reject) => {
    return axios({
      method: 'get',
      url: 'https://reqres.in/api/unknown',
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error);
    });
  });
}

export const getUsersApi = (data) => {
  return new Promise((resolve, reject) => {
    return axios.get('https://randomuser.me/api', { params: data })
      .then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      });
  });
}
