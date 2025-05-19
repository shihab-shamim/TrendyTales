import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosSecure from "../axios/useAxiosSecure";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosSecure=useAxiosSecure()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  const logIn=(email,password)=>{

    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
        setUser(currentUser);
      setLoading(false);

        const  userEmail={email:currentUser?.email}
        if(currentUser){
      setLoading(false);

            const{data}=await axiosSecure.post("/jwt",{userEmail})
            // console.log(data);

        }
        else{
            const{data}=await axiosSecure.post("/logOut",{userEmail})
            // console.log(data);


        }
     
    });
    return () => unsubscribe();
  }, [axiosSecure]);

  const value = {
    createUser,
    user,
    loading,
    logOut,
    logIn
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
