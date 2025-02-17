import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NavBar } from './components/navbar/navbar'
import { FirstContainer } from './components/first-container/firstContainer'
import './main.css'
import { Headband } from './components/headband/headband'
import { About } from './components/about/about'
import { CardsAbout } from './components/cards-about/cardsAbout'
import  { SlideAutoCards } from './components/cards-slide/cardsSlide'
import { RoadMap } from './components/roadMap/roadMap'
import { BinaboxWork } from './components/binaboxWork/binaboxWork'
import { OurTeam } from './components/ourTeam/ourTeam'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <FirstContainer/>
    <Headband/>
    <About/>
    <CardsAbout/>
    <SlideAutoCards/>
    <RoadMap/>
    <BinaboxWork/>
    <OurTeam/>
  </StrictMode>,
)
