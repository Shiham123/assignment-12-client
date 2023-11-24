import axios from 'axios';

const secureApi = axios.create({
  baseURL: 'http://localhost:5000',
});

const useSecureApi = () => {
  return secureApi;
};

export default useSecureApi;
