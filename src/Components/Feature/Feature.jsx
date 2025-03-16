import React from 'react'
import './Feature.css'
import { Button } from '../Button/Button'
export const Feature = () => {
  return (
    <div className='Pauu'>
      <div className='MainFeat'>
        <div className='Dopp'>
          <span className='spon'>Feature Cars</span>
          <div className='markingcars'>
            <span className='Yoyo'>Mercedes-Benz Maybach S-Class</span>
          </div>

          <div className='Detali'>
            <div className='Praisik'>
              <span className='P'>Price</span>{' '}
              <span className='X'> 14.999$</span>
            </div>
            <div className='Speed'>
              <span className='P'>Speed</span>{' '}
              <span className='X'>150km/H</span>
            </div>
            <div className='Consumption'>
              <span className='P'> Consumption</span>{' '}
              <span className='X'>12 liters</span>
            </div>
          </div>
          <Button title='Buy Now ↗' className='Knopks' />
        </div>
        <div className='Fotochka'>
          <img src='./assets/pngwing.com (1).png' alt='' />
        </div>
      </div>
    </div>
  )
}
