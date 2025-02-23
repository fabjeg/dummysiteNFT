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
import { Faqs } from './components/FAQS/faqs'
import { Partner } from './components/partner/partner'
import { Partner2 } from './components/partner/partner2'
import { Partner3 } from './components/partner/partner3'
import { Footer } from './components/footer/footer'

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
    <Faqs/>
    <Partner/>
    <Partner2/>
    <Partner3/>
    <Footer/>
  </StrictMode>,
)
