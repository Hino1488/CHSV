import React from 'react'
import './Service.css'
import { CiSettings } from 'react-icons/ci'
import { SlSpeedometer } from 'react-icons/sl'
import { MdSupportAgent } from 'react-icons/md'
export const Service = () => {
  return (
    <div className='MainServ'>
      <div className='ourS'>
        <span className='ourSr'> Our Service</span>
        <div className='bests'>
          <span> We are the best</span> <span> service for car</span>
        </div>
      </div>
      <div className='cards'>
        <div className='cardfirst'>
         
            <CiSettings className='icons'/>
            <span className='e'>Quality Service</span>
            

           <div className='s'>
           <span >   Getting Pre-Qualified Makes  Car </span><span>Shopping Easier Becauser It Gives</span>
           <span>   You Personalized Financing</span>
             </div>
        
        </div>
        <div className='cardsecond'>
          <SlSpeedometer  className='icons'/>
         
            <span className='e'>Fastest Speed</span>
            
            <div className='s'>
           <span >   Getting Pre-Qualified Makes  Car </span><span>Shopping Easier Becauser It Gives</span>
           <span>   You Personalized Financing</span>
             </div>
        </div>
        <div className='cardthirty'>
          <MdSupportAgent className='icons'/>
         
            <span className='e'> 24/7 Support</span>
            <div className='s'>
           <span >   Getting Pre-Qualified Makes </span> <span>Car Shopping Easier Becauser It Gives</span>
           <span>   You Personalized Financing</span>
             </div>
        </div>
      </div>
    </div>
  )
}
