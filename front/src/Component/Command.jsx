import React from 'react'

import { seller } from '../api'
import { launchDice, turnCharacter } from '../Gameplay/move'

const Command = ({
    initialCharacter,
    character,
    setCharacter,
    setDiceResult,
    characterMove,
    setDisplayDiceResult
  }) => {

    const hasCharacterMoved = characterMove <= 0

    return (
        <section>
            <button
                onClick={()=> seller(initialCharacter, (err, sellerData)=> setCharacter(sellerData[0]))}
            >
                restart
            </button>
            <button
                style={{
                    opacity : hasCharacterMoved ? '1' : '0.5' 
                }}
                onClick={()=>{
                    launchDice(setDiceResult, setDisplayDiceResult)
                }}
            >
                Dice
            </button>
            <button
                onClick={()=>{turnCharacter(setCharacter, character, 1, seller)}}
            >
                turn left
            </button>
            <button
                onClick={()=>{turnCharacter(setCharacter, character, 2, seller)}}
            >
            turn right
            </button>
        </section>
    )
}

export default Command