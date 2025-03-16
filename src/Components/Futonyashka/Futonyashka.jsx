import React from 'react'
import './Futonyashka.css'
import { Button } from '../Button/Button'
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
export const Futonyashka = () => {
  return (
    <div className='mainFut'>
      <div className='bigPapa'>
        <div className='reg1'>
          <span className='subsc'>П~п...Пожалуйста подпишись  </span>
          <div className='reg'>
            <input
              type='text'
              placeholder='Enter your email here'
              className='registr'
            />
            <Button title='Подписаться' />
          </div>
        </div>

        <img src='/assets/pngwing.com (2).png' alt='' className='fotka' />
      </div>
      <div className='fut'>
        <div className='MainHead'>
          <span className='Tsar'>TSAR</span>
          <ul className='Headbar'>
            <li className='Headveh'>Vehicle</li>
            <li className='Assistsshop'>Shopping Assist</li>
            <li className='Invent'>Invetory</li>
          </ul>
          <ul className='ikona'>
<li > <FaInstagram /></li>
<li> <CiTwitter /></li>
<li> <CiFacebook /></li>
<li> <FaGithub /> </li>
          </ul>
        </div>
        <div className='Copy'>
          Запатентовано в 2022 году, не разрешено к использованию на других
          проектах{' '}
        </div>
      </div>
    </div>
  )
}
