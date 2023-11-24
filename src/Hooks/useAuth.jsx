import { useContext } from 'react';
import { AppContext } from '../AppContext/context';

const useAuth = () => {
  const auth = useContext(AppContext);
  return auth;
};

export default useAuth;
