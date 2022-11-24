import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.Config";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Register with user email and password
  const userEmailAndPasswordRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // google popup sign
  const googleProvider = new GoogleAuthProvider();
  const googlePopupSign = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sing with user email and password
  const signInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user log out
  const userLogOut = () => {
    return signOut(auth);
  };

  // user catch
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    userEmailAndPasswordRegister,
    userLogOut,
    updateUserProfile,
    googlePopupSign,
    signInWithEmailPassword,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
