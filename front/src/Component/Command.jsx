import React from 'react'

import { seller, getCarpets } from '../api'
import { launchDice, turnCharacter } from '../Gameplay/move'

import { isSquareAroundPlayer } from '../Gameplay/carpetPosition'

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
    setCarpetToApply,
    setStep,
    step,
    carpetsPlayer,
    turn,
    setTurn
  }) => {

    const hasCharacterMoved = characterMove <= 0
    const {raw_square1, raw_square2, column_square1, column_square2} = carpetToApply

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
                    setStep(0)
                    setTurn(0)
                }}
            >
                restart
            </button>
            {
                step === 0 &&
                <button
                    style={{
                        opacity : hasCharacterMoved ? '1' : '0.5' 
                    }}
                    onClick={()=>{
                        launchDice(setDiceResult, setDisplayDiceResult)
                        setStep(1)
                    }}
                >
                    Dice
                </button>
            }
            <button
                onClick={()=>{setCarpetToApply(carpet => ({
                    ...carpet,
                    raw_square2 : carpet.position ? (carpet.raw_square1+1) : raw_square1,
                    column_square2 : carpet.position ? carpet.column_square1 : (carpet.column_square1+1),
                    position : !carpet.position
                }))}}
            >
                turn carpet
            </button>
            <button
                
                onClick={()=>{
                    if (
                        isSquareAroundPlayer(character, column_square1, raw_square1) 
                        && isSquareAroundPlayer(character, column_square2, raw_square2)
                    ){
                        getCarpets({...carpetToApply, id: carpetsPlayer[turn].id}, (err, carpetsData) => {setCarpets(carpetsData)})
                        setStep(0)
                        setTurn(prevTurn => prevTurn+1)
                    } else {

                    }
                    
                }}
            >validate carpet</button>
        </section>
    )
}

export default Command