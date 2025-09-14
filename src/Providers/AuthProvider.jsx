import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import useAxiousPublic from "../Hooks/useAxiousPublic";

export const AuthContex = createContext(null);
const AuthProvider = ({ children }) => {
  const name = "Rubel";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiousPublic = useAxiousPublic();

  //create user
  const registerUsesr = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //updateUser
  const updateUser = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //sigout
  const logoutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    name,

    user,
    loading,
    registerUsesr,
    loginUser,
    logoutUser,
    updateUser,
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("onState", currentUser);

      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiousPublic.post("/jwt", userInfo)
        .then((res) => {
          if (res.data.token) {
            console.log("token", res.data);
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
