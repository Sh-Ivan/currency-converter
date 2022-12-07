import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { useConvertQuery } from '../../store/api/currencyApi'
import { ConvertQuery } from '../../store/api/types'
import './Convert.scss'

const Convert = () => {
  const [query, setQuery] = useState<string>('')
  const [skip, setSkip] = useState(true)
  const [showResult, setShowResult] = useState(false)
  const [convertQuery, setConvertQuery] = useState<ConvertQuery | null>(null)
  const { data, error, isLoading } = useConvertQuery(convertQuery!, {
    skip,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowResult(false)
    setQuery(e.target.value)
  }

  const sendQuery = () => {
    const requestData = query.replace(/\s\s+/g, ' ').split(' ')
    console.log(requestData)
    setConvertQuery({
      from: requestData[1],
      to: requestData[3],
      amount: +requestData[0],
    })
    setSkip(false)
    setShowResult(true)
  }

  return (
    <div className="convert-block">
      <h3>
        Enter query to conver in format
        <i>'15 usd in rub'</i>
      </h3>
      <input
        type="text"
        name="queryString"
        value={query}
        onChange={handleChange}
      />
      <button onClick={sendQuery}>Send</button>
      <div>{showResult && `${query}: ${data?.result}`}</div>
    </div>
  )
}

export default Convert
