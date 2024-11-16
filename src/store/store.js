import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlide";
import { boolSlice, journalSlice } from "./journal";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    journal: journalSlice.reducer,
    bool: boolSlice.reducer,
  },
});
