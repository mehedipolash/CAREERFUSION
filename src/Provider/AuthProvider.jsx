import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut=()=>{
    return signOut(auth)
  }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return ()=>{
      return unsubscribe();
    }
  },[])

  const authData = {
    user,
    setUser,
    auth,
    createUser,
    logOut,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
