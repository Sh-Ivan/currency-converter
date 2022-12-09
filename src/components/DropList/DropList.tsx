import React, {MouseEvent} from 'react'
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

  const setAndToggle = (e: MouseEvent<HTMLLIElement>) => {
    const symbol = e.currentTarget.dataset.symbol
    handleClick()
    if (symbol) {
      dispatch(setBaseCurrency(symbol))
    }
  }

  return (
    <ul className={classNames}>
      {data &&
        Object.keys(data.symbols).map((symbol) => {
          return (
            <li key={symbol} data-symbol={symbol} onClick={setAndToggle}>
              {symbol}
            </li>
          )
        })}
    </ul>
  )
}

export default DropList
