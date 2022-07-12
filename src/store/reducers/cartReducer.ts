import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/mainPage';

export interface CartState {
  value: IProduct[]
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {
      state.value.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
