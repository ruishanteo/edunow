import { createSlice } from "@reduxjs/toolkit";

import { db } from "hooks/Firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useAuth } from "hooks/FirebaseHooks";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentUser: {},
  },
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload;
    },
    saveCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export function fetchCurrentUser() {
  return async (dispatch, getState) => {
    const user = useAuth();
    const response = await getDoc(collection(db, "users"));
    const userData = { ...response.data(), id: doc.id };
    return userData;
  };
}

export async function fetchUsers(dispatch, getState) {
  const response = await getDocs(collection(db, "users"));
  const users = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  dispatch(usersSlice.actions.saveUsers(users));
}

export function fetchUser(userId) {
  return async (dispatch, getState) => {
    const response = await getDoc(collection(db, "users", userId));
    const user = { ...response.data(), id: doc.id };
    return user;
  };
}

export async function saveUser(dispatch, getState) {
  addDoc(collection(db, "users"), getState().currentUser);
}

export function saveCurrentUser(user) {
  return async (dispatch, getState) => {
    const docs = await getDocs(
      query(collection(db, "users"), where("uid", "==", user.uid))
    );
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
    });
  };
}

export const { goNext, goToQuestion, saveQuestionsToStore } =
  usersSlice.actions;
export const questionsReducer = usersSlice.reducer;
