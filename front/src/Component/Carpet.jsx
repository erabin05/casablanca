import React from 'react'

import { isSquareAroundPlayer, carpetColor } from '../Gameplay/carpetPosition'
import { getCarpets, getGame } from '../api'

import rightArrow from '../rightArrow.png'
import leftArrow from '../leftArrow.png'
import ok from '../ok.png'

const Carpet = ({
    column_square1, 
    column_square2,
    raw_square1,
    raw_square2,
    position,
    playerID,
    character,
    setCarpetToApply,
    carpetToApply,
    turn,
    player,
    carpetsPlayer,
    carpets,
    setCarpets,
    toApply,
    game, 
    setGame
}) => {
    const raw = raw_square1 < raw_square2 ? raw_square1 : raw_square2
    const column = column_square1 < column_square2 ? column_square1 : column_square2

    return (
        <section 
            className='carpet-container'
            style={{
                marginTop : `${raw*102 + (position ? 0 : 50)}px`, 
                marginLeft : `${column*100 - (position ? 0 : 50)}px`
            }}
        >
            { 
                toApply &&
                <div className='carpet-commands'>
                    <div
                        style = {{
                            marginLeft : position ? '210px' : '160px',
                            marginTop : position ? '-40px' : '-90px'
                        }}
                    >
                        <div>
                            <figure
                                style = {{
                                    transform : `rotate(${position ? 90 : 0}deg)`
                                }}
                                onClick={()=>{setCarpetToApply(carpet => ({
                                    ...carpet,
                                    raw_square2 : carpet.position ? (carpet.raw_square1+1) : raw_square1,
                                    column_square2 : carpet.position ? carpet.column_square1 : (carpet.column_square1+1),
                                    position : !carpet.position
                                }))}}
                            >
                                <img src={position ? rightArrow : leftArrow} alt='turn carpet arrow'/>
                            </figure>
                            <figure
                                onClick={()=>{
                                    if (
                                        isSquareAroundPlayer(character, column_square1, raw_square1) 
                                        && isSquareAroundPlayer(character, column_square2, raw_square2)
                                    ){
                                        getCarpets({...carpetToApply, id: carpetsPlayer[turn].id}, (err, carpetsData) => {setCarpets(carpetsData)})
                                        getGame({
                                            ...game, 
                                            step : 0,
                                            turn : player === 4 ? turn + 1 : turn,
                                            player : player < 4 ?  player + 1 : 1
                                        }, (err, game) => setGame(game))
                                    }
                                }}
                            >
                                <img src={ok} alt='validate carpet position'/>
                            </figure>
                        </div>
                    </div>
                </div>
            }
            <div
                className='carpet'
                style={{
                    backgroundColor : toApply ? 'black' : carpetColor(playerID),
                    opacity : toApply ? '0.6' : '1',
                    transform : `rotate(${position ? 0 : 90}deg)`,
                    border : toApply && `solid 1px  ${
                        isSquareAroundPlayer(character, column_square1, raw_square1) 
                        && isSquareAroundPlayer(character, column_square2, raw_square2)
                        ? 'green'
                        : 'red'
                    }`
                }}
            >
            </div>
        </section>
    )
}

export default Carpet