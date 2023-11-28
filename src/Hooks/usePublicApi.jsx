import axios from 'axios';

const publicApi = axios.create({
  baseURL: 'https://assignment-12-server-theta-eosin.vercel.app',
});

const usePublicApi = () => {
  return publicApi;
};

export default usePublicApi;
