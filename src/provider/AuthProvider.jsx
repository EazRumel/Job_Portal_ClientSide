import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  // console.log(user)
  const [loading,setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email, password);
  }
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const googleSignIn = () =>{
  return signInWithPopup(auth,provider)
  }
  const singOutUser = () =>{
    return signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    singOutUser,
    googleSignIn
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      console.log("user captured via authChange",currentUser);
      setLoading(false)
    })
    return () =>{
      unSubscribe();
    }
  },[])
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;