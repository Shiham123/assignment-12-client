import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import globalAuth from '../Firebase/firebase.config';
import usePublicApi from '../Hooks/usePublicApi';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const publicApi = usePublicApi();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(globalAuth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(globalAuth, email, password);
  };

  const socialLogin = () => {
    setLoading(true);
    return signInWithPopup(globalAuth, googleProvider);
  };

  const profileUpdate = (name, photoUrl) => {
    return updateProfile(globalAuth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        publicApi
          .post('jwt', userInfo)
          .then((response) => {
            if (response.data) {
              localStorage.setItem('access-token', response.data);
            }
          })
          .catch((error) => console.log(error));
      } else {
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [publicApi]);

  const info = {
    createUser,
    loginUser,
    socialLogin,
    logOut,
    profileUpdate,
    loading,
    user,
  };
  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
