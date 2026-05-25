import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
// import { GoogleAuthProvider } from "firebase/auth/web-extension";

// const googleProvier = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    handleLogIn,
    handleRegister,
    loading,
    setLoading,
    user,
    setUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
