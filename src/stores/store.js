import { configureStore } from "@reduxjs/toolkit";

import { questionsReducer } from "./questionStore";
import { usersReducers } from "./userStore";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    users: usersReducers,
  },
});

export default store;
