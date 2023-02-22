import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface productState {
  value: number
}

// Define the initial state using that type
const initialState: productState = {
  value: 0,
}

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCart: (state,action) => {
      
      state.value = action.payload
    },
    deleteCart: (state) => {
        state.value = 0
    },

  },
})

export const {setCart,deleteCart } = productSlice.actions



export default productSlice.reducer