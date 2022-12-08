import React from 'react'
import { useGetAllSymbolsQuery } from '../../store/api/currencyApi'
import { useAppDispatch } from '../../store/hooks'
import { setBaseCurrency } from '../../store/slices/baseCurrencySlice'
import './DropList.scss'

interface drpoListPoprs {
  show: boolean
  handleClick: () => void
}

const DropList = ({ show, handleClick }: drpoListPoprs) => {
  const { data } = useGetAllSymbolsQuery()
  const dispatch = useAppDispatch()

  const classNames = show ? 'drop-list' : 'drop-list hidden'

  const setAndToggle = (symbol: string) => {
    handleClick()
    dispatch(setBaseCurrency(symbol))
  }

  return (
    <ul className={classNames}>
      {data &&
        Object.keys(data.symbols).map((symbol) => {
          return (
            <li key={symbol} onClick={(e) => setAndToggle(symbol)}>
              {symbol}
            </li>
          )
        })}
    </ul>
  )
}

export default DropList
