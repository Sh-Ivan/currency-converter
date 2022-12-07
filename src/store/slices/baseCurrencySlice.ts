import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface baseCurrency {
  value: string
}

const initialState: baseCurrency = { value: 'RUB' }

const baseCurrencySlice = createSlice({
  name: 'baseCurrency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setBaseCurrency } = baseCurrencySlice.actions

export default baseCurrencySlice.reducer
