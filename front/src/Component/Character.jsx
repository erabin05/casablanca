import React from 'react'

import rightArrow from '../rightArrow.png'
import leftArrow from '../leftArrow.png'

import { seller } from '../api'
import { turnCharacter } from '../Gameplay/move'

const Character = ({character, setCharacter, step}) => (
    <section 
        className='character'
        style={{
            marginTop : `${25 + (100)*character.raw}px`,
            marginLeft : `${25 + (100)*character.column}px`
            }}
        >
        <div
            className='seller'
            style={{
                transform : `rotate(${(character.direction - 1)*90}deg)`
                }}
        >  
            <div></div>
        </div>
        {
            step === 0 &&
            character.rotation !== 0 && 
            <figure 
                className='left'
                onClick={()=>{turnCharacter(setCharacter, character, 1, seller)}}
            ><img src={leftArrow} alt='left arrow'/></figure>
        }
        {
            step === 0 && 
            character.rotation !== 2 && 
            <figure 
                className='right'
                onClick={()=>{turnCharacter(setCharacter, character, 2, seller)}}
            ><img src={rightArrow} alt='right arrow'/> </figure>
        }
    </section>
)

export default Character