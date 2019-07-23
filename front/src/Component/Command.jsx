import React from 'react'

import { seller, getCarpets } from '../api'
import { launchDice, turnCharacter } from '../Gameplay/move'

const Command = ({
    initialCharacter,
    character,
    setCharacter,
    setDiceResult,
    characterMove,
    setDisplayDiceResult,
    carpets,
    setCarpets,
    carpetToApply,
    setCarpetToApply
  }) => {

    const hasCharacterMoved = characterMove <= 0

    return (
        <section>
            <button
                onClick={()=> {
                    seller(initialCharacter, (err, sellerData)=> setCharacter(sellerData[0]))
                    carpets.forEach((carpet) => {
                        getCarpets({
                            id : carpet.id,
                            raw_square1 : null,
                            raw_square2 : null,
                            column_square1 : null,
                            column_square2 : null
                          }, (err, carpetsData) => setCarpets(carpetsData))
                    })
                }}
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
            <button
                onClick={()=>{setCarpetToApply(carpet => ({...carpet, position : !carpet.position}))}}
            >
                turn carpet
            </button>
            <button
                onClick={()=>{getCarpets({...carpetToApply, id:1}, (err, carpetsData) => {
                    console.log(carpetsData)
                    setCarpets(carpetsData)})}}
            >validate carpet</button>
        </section>
    )
}

export default Command