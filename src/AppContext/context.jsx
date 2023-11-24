import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import globalAuth from '../Firebase/firebase.config';

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const logOut = () => {
    setLoading(true);
    return signOut(globalAuth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(globalAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const info = { createUser, loginUser, socialLogin, logOut, loading, user };
  return <AppContext.Provider value={info}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
