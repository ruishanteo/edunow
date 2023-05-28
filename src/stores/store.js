import { configureStore } from "@reduxjs/toolkit";

import { questionsReducer } from "./questionStore";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});

export default store;
