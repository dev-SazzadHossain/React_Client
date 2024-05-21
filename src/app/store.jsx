import { configureStore } from "@reduxjs/toolkit";
import rootApi from "../Features/rootApi";
import authSlice from "../Features/api/Auth/authSlice";

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    user: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});
