import { useState } from 'react'

import './App.css'
import { Header } from './Components/Header/Header'
import { Section } from './Components/Section/Section'
import { Details } from './Components/Details/Details'
import { Ebaut } from './Components/Ebaut/Ebaut'
import { Feature } from './Components/Feature/Feature'
import { Service } from './Components/Service/Service'
import { Futonyashka } from './Components/Futonyashka/Futonyashka'
function App() {
 

  return (
    <>
    <Header/>
    <Section/> 
    <Details/>
<Ebaut/>
<Feature />
<Service />
<Futonyashka/>
    </>
  )
}

export default App
