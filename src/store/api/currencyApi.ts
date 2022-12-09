import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  ConvertQuery,
  ConvertResponse,
  GetLatestQuery,
  GetLatestResponse,
  Symbols,
} from './types'

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
    convert: builder.query<ConvertResponse, ConvertQuery>({
      query: ({ from, to, amount }) =>
        `convert?to=${to}&from=${from}&amount=${amount}`,
    }),
    getLatest: builder.query<GetLatestResponse, GetLatestQuery>({
      query: ({ symbols, base }) => `latest?symbols=${symbols}&base=${base}`,
    }),
  }),
})

export const {
  useGetAllSymbolsQuery,
  useGetLatestQuery,
  useConvertQuery,
} = currencyApi
