import React, { ChangeEvent, FormEvent } from 'react'
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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

  let result
  if (error) {
    result = <div className="error">Wrong request, please try again</div>
  } else if (isLoading) {
    result = <div className="loading">Loading...</div>
  } else if (showResult) {
    result = <div>{`${query}: ${data?.result}`}</div>
  }

  return (
    <div className="convert-block">
      <h3>
        Enter query to conver in format
        <i>'15 usd in rub'</i>
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="queryString"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      <div>{result}</div>
    </div>
  )
}

export default Convert
