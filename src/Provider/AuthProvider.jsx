import React, { createContext, useState } from "react";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState();

  const authData = {
    user,
    setuser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
