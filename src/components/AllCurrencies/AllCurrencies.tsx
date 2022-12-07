import React from 'react'
import { useGetAllSymbolsQuery } from '../../store/api/currencyApi'
import { useAppSelector } from '../../store/hooks'
import './AllCurrencies.scss'

const AllCurrencies = () => {
  const { data, error, isLoading } = useGetAllSymbolsQuery()
  const { value: baseCurrency } = useAppSelector((state) => state.baseCurrency)

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>{error.toString()}</h2>

  return (
    <div>
      <h2 className="curr-list-header">Exchange Rates</h2>
      <div className="curr-list">
        <div className="curr-row curr-row__header">
          <div className="curr-row__cell">Symbol</div>
          <div className="curr-row__cell">Curriency</div>
          <div className="curr-row__cell">Amount</div>
        </div>
        <div className="curr-row base">
          <div className="curr-row__cell">{baseCurrency}</div>
          <div className="curr-row__cell">{data?.symbols[baseCurrency]}</div>
          <div className="curr-row__cell">1</div>
        </div>
        {data &&
          Object.keys(data.symbols).map((symbol) => {
            return (
              <div key={symbol} className="curr-row">
                <div className="curr-row__cell">{symbol}</div>
                <div className="curr-row__cell">{data?.symbols[symbol]}</div>
                <div className="curr-row__cell"></div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default AllCurrencies
