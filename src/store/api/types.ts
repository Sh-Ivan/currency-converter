export interface Symbols {
  success: boolean
  symbols: { [key: string]: string }
}

export interface ConvertQuery {
  amount: number
  from: string
  to: string
}

export interface ConvertResponse {
  date: string
  historical: string
  info: {
    rate: number
    timestamp: number
  }
  query: ConvertQuery
  result: number
  success: boolean
}

export interface GetLatestQuery {
  symbols: string
  base: string
}

export interface GetLatestResponse {
  base: string
  date: string
  rates: {
    ['string']: number
  }
  success: boolean
  timestamp: number
}
