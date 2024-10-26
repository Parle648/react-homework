import { configureStore } from "@reduxjs/toolkit"
import formSlice from "../fetures/form-slice"

export const appStore = configureStore({
  reducer: {
    formSlice: formSlice,
  },
})
