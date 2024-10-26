import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface IFormState {
  login: number
  password: number
}

const initialState: IFormState = {
  login: 0,
  password: 0,
}

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    updateFormState(store, action: PayloadAction<IFormState>) {
      store.login = +action.payload.login
      store.password = +action.payload.password
    },
  },
})

export const { updateFormState } = formSlice.actions
export default formSlice.reducer
