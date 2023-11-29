import axios from 'axios';

const secureApi = axios.create({
  baseURL: 'https://assignment-12-server-theta-eosin.vercel.app',
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
      return Promise.reject(error);
    }
  );

  return secureApi;
};

export default useSecureApi;
