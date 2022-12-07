import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import DropList from '../DropList'
import './Navbar.scss'

const Navbar = () => {
  const { value: baseCurrency } = useAppSelector((state) => state.baseCurrency)
  const [showDrop, setShowDrop] = useState<boolean>(false)

  const toggleDropList = () => {
    setShowDrop(!showDrop)
  }

  return (
    <div className="topnav">
      <div></div>
      <div>
        <Link to="/">Converter</Link>
        <Link to="/currencies">Currencies</Link>
      </div>
      <div onClick={toggleDropList}>
        <Link to="#">{baseCurrency}</Link>
        <DropList show={showDrop} handleClick={toggleDropList} />
      </div>
    </div>
  )
}

export default Navbar
