import { configureStore } from "@reduxjs/toolkit";

import { notificationsReducer } from "components/Notifications";

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});

export default store;
