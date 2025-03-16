import React from 'react'
import './Section.css'
import { Button } from '../Button/Button'
export const Section = () => {
  return (
    <div className='mainSection'>
      <div className='sectionL'>
        <span className='Title'>
          {' '}
          buy your <br /> dream car
        </span>
        <span>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique{' '}
          <br /> voluptatum fugiat culpa nesciunt e
        </span>

        <div className='Knopki'>
          <Button title='Buy Now ↗' />
          <Button title='Learn More' variant='secondary' />
        </div>
      </div>
      <div className='sectionR'>
        <div className='Dop'>
             <span className='Cp'><span className='trusted'>2.6k</span> people Trusted  our company </span>
             </div>
       
        <img src='/assets/pngwing.com (1).png' alt='' className='Pervicar' />
      </div>
    </div>
  )
}
