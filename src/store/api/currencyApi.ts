import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Symbols {
  success: boolean
  symbols: { [key: string]: string }
}

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.apilayer.com/exchangerates_data/',
    headers: {
      apikey: 'N3SBreKEX9uLjI3dUGlz7bP2dkz5A1v7',
    },
  }),
  endpoints: (builder) => ({
    getAllSymbols: builder.query<Symbols, void>({
      query: () => `symbols`,
    }),
  }),
})

export const { useGetAllSymbolsQuery } = currencyApi
