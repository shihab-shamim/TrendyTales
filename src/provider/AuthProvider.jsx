import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext=createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

    const value={
       createUser
    }
    return (
       <AuthContext.Provider value={value}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;