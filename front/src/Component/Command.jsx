import React from 'react'

import { seller, getCarpets, getGame } from '../api'
import { launchDice } from '../Gameplay/move'

import { carpetColor } from '../Gameplay/carpetPosition'

const Command = ({
    initialCharacter,
    setCharacter,
    setDiceResult,
    characterMove,
    setDisplayDiceResult,
    carpets,
    setCarpets,
    step,
    game,
    setGame,
    player
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
                    getGame({turn : 0, step : 0, player : 1}, (err, game) => setGame(game))
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
                        getGame({...game, step : 1}, (err, game) => setGame(game))
                    }}
                >
                    Dice
                </button>
            }
            <div
                style={{
                    backgroundColor : carpetColor(player),
                    width : '20px',
                    height : '20px'
                }} 
            ></div>
        </section>
    )
}

export default Command