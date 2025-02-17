import { CardsFirst } from '../cards-first-container/cards'
import { Text } from '../text-first-container/text'
import './firstContainer.css'

export function FirstContainer () {
    return(
       <div className="first_container">
        <Text/>
        <CardsFirst/>
       </div>
    )
}