import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
// Initialize Firebase Authentication and get a reference to the service
const provider = new GoogleAuthProvider();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // console.log(loading, user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser=(updatedData)=>{
       return updateProfile(auth.currentUser, updatedData);
  }

  const googleSignUp = () => {
    return signInWithPopup(auth, provider);
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    auth,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    googleSignUp,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
