import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvier = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleRegisterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signIn google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvier);
  };
  //LOGOUT USER
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //img update
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currrentUser) => {
      if (currrentUser) {
        setLoading(false);
      } else {
        console.log("❌ No user logged in");
        setUser(null);
      }
      // console.log(currrentUser);
      setUser(currrentUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    handleLogInUser,
    handleRegisterUser,
    signInGoogle,
    logOutUser,
    loading,
    setLoading,
    user,
    setUser,
    updateUserProfile,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
