// import axios from "axios";
import axios from "axios";
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
import useToken from "./../hook/useTitle/useToken";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [getUser, setGetUser] = useState("");

  const [userInfo, setUserInformation] = useState("");
  console.log(userInfo);

  // use token hook
  const [token] = useToken(userInfo);

  // axios
  //   .get(` https://buy-sell-car-store-server.vercel.app/users/${user?.email}`)
  //   .then(function (response) {
  //     setUserInformation(response.data);
  //   });

  useEffect(() => {
    axios
      .get(
        ` https://buy-sell-car-store-server.vercel.app/users/${user?.email}`,
        {}
      )
      .then((res) => {
        setUserInformation(res.data);
      });
  }, [user]);

  // useEffect(() => {
  //   const url = ` https://buy-sell-car-store-server.vercel.app/all-micro`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setALlMicro(data))
  //     .catch((error) => console.log(error));
  // }, [user?.email]);

  //Register with user email and password
  const userEmailAndPasswordRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // google popup sign
  const googleProvider = new GoogleAuthProvider();
  const googlePopupSign = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sing with user email and password
  const signInWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user log out
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // user catch
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    userInfo,
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
