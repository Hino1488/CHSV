import React from 'react'
import { Button } from '../Button/Button'
import "./Header.css"
export const Header = () => {
  return (
    <div className='MainHead'>
      <span className='Tsar'>TSAR</span>
      <ul className='Headbar'>
        <li className='Headveh'>Vehicle</li>
        <li className='Assistsshop'>Shopping Assist</li>
       <li className='Invent'>Invetory</li>
      </ul>
      <Button title='Contact Us' variant='secondary'/>
    </div>
  )
}
