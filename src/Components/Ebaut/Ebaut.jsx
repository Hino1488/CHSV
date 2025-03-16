import React from 'react'
import './Ebaut.css'
import { Button } from '../Button/Button'
export const Ebaut = () => {
  return (
    <div className='MainEb'>
      <div className='verh'>
        <div className='pervi'>
          <span>Drive into Adventure: Buy Your Dream Car Today</span>
        </div>
        <div className='vtoroi'>
          <span className='vtoroitext'>
            {' '}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
            eligendi quasi dolore repellendus quas voluptatem omnis maiores esse
            sequi illo temporibus officia!
          </span>
          <Button title='Learn More ↗' className='Knopka' />
        </div>
      </div>
      <div className='seredina'>
        <img src='/assets/pngwing.com (4).png' alt='' className='fotomashina' />
      </div>
      <div className='niz'>
        <div className='Awarded'>
          <span className='M'>Awarded By World Best</span>
        </div>
        <div className='UserR'>
          <span className='K'>67K</span>
          <div className='pon'>
            <span className='M'>User</span> <span className='M'>Ratings</span>
          </div>
        </div>
        <div className='Succesful'>
          <span className='K'> 100K</span>
          <div className='pon'>
            <span className='M'>Successful </span>
            <span className='M'>Vehicles Rented</span>
          </div>
        </div>
        <div className='Clients'>
          <span className='K'>100</span>
          <div className='pon'>
            <span className='M'>Satisfied And</span>
            <span className='M'>Happy Clients</span>
          </div>
        </div>
      </div>
    </div>
  )
}
