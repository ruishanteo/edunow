import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import store from "stores/store";
import { updateCurrentUser } from "stores/userStore";

import { auth } from "./Firebase";

const handleErrorMessage = (err) => {
  alert(err);
  console.log("Error Code:", err.code, "Message:", err.message);
  // throw err;
};

const logInWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password).catch(
    handleErrorMessage
  );
};

const registerWithEmailAndPassword = async (name, email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then(async (response) => {
      await updateProfile(response.user, { displayName: name });
      store.dispatch(updateCurrentUser(response.user, 0));
    })
    .catch(handleErrorMessage);
};

const sendPasswordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email).catch(handleErrorMessage);
};

const logout = () => {
  return signOut(auth);
};

function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

export {
  handleErrorMessage,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  useAuth,
};
