import { createSlice } from "@reduxjs/toolkit";

import { db } from "hooks/Firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentScore: 0,
  },
  reducers: {
    saveUsers: (state, action) => {
      state.users = action.payload;
    },
    saveCurrentUser: (state, action) => {
      state.currentScore = action.payload;
    },
  },
});

export async function fetchUsers(dispatch, getState) {
  const response = await getDocs(collection(db, "users"));
  const users = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  dispatch(usersSlice.actions.saveUsers(users));
}

export function fetchCurrentUser(user) {
  return async (dispatch, getState) => {
    const response = await getDoc(doc(db, "users", user.uid));
    const userData = { ...response.data(), id: doc.id };
    dispatch(usersSlice.actions.saveCurrentUser(userData.score));
  };
}

export function fetchUser(userId) {
  return async (dispatch, getState) => {
    const response = await getDoc(doc(db, "users", userId));
    const user = { ...response.data(), id: doc.id };
    return user;
  };
}

export function updateCurrentUser(user, score) {
  return async (dispatch, getState) => {
    await fetchCurrentUser(user);
    const oldScore = getState().users.currentScore;
    await setDoc(doc(db, "users", user.uid), {
      displayName: user.displayName,
      score: score + (oldScore ? oldScore : 0),
    });
    dispatch(fetchCurrentUser(user));
  };
}

export const { saveUsers, saveCurrentUser } = usersSlice.actions;
export const usersReducers = usersSlice.reducer;
