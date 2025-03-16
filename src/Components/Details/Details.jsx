import React from 'react'
import './Details.css'
import { SiToyota } from 'react-icons/si'
import { SiHonda } from 'react-icons/si'
import { SiFord } from 'react-icons/si'
import { SiTesla } from 'react-icons/si'
import { MdArrowOutward } from 'react-icons/md'
import { IoStar } from 'react-icons/io5'
import { CiDesktopMouse2 } from 'react-icons/ci'
import { RiArrowDownDoubleLine } from 'react-icons/ri'

export const Details = () => {
  return (
    <div className='MainDetails'>
      <div className='blockOne'>
        <div className='online'>
          <div className='avatar'>
            <img src='/assets/churka.png' alt='' />
          </div>
          <div className='avatar'>
            <img src='/assets/nosigma.jpg' alt='' />
          </div>
          <div className='avatar'>
            <img src='/assets/sigma.gif' alt='' />
          </div>
          <span className='peoponline'>5k people availaible</span>
        </div>
        <div className='markcars'>
          <div className='Toyota mark'>
            <SiToyota /> Tayota
          </div>
          <div className='Honda mark'>
            <SiHonda /> Honda
          </div>
          <div className='Ford mark'>
            <SiFord /> Ford
          </div>
          <div className='Tesla mark'>
            <SiTesla /> Tesla
          </div>
        </div>
      </div>

      <div className='blockTwo'>
        <div className='Vmeste'>
          <div className='carteg'>#Toyota </div>

          <div className='strelka'>
            <MdArrowOutward />
          </div>
        </div>
        <div className='chertochka'></div>
        <div className='cartext'>
          <span>Toyota benz</span>
          <span>Toyota comfort</span>
        </div>
        <div className='carfoto'>
          {' '}
          <img src='/assets/pngwing.com (3).png' alt='' className='fotocar' />
        </div>
      </div>

      <div className='blockThree'>
        <div className='explore'>
          {' '}
          <div className='cherta'></div>Explore our new car
          <div className='znaki'>
            <CiDesktopMouse2 className='mouse' />
            <RiArrowDownDoubleLine className='arrow' />
          </div>
        </div>

        <div className='details'>
          <div className='price'>$ 14.888</div>
          <div className='stark'>
            <IoStar className='star' /> 4.5 <div className='chertochki'></div>{' '}
          </div>
          <div className='detailstext'>
            "I love this car. This car is amazing"
          </div>
        </div>
      </div>
    </div>
  )
}
