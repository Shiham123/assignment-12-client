import axios from 'axios';

const secureApi = axios.create({
  baseURL: 'http://localhost:5000',
});

const useSecureApi = () => {
  secureApi.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      config.headers.validation = `bearer ${token}`;
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  secureApi.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  return secureApi;
};

export default useSecureApi;
