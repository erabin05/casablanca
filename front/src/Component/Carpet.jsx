import React from 'react'

import { isSquareAroundPlayer } from '../Gameplay/carpetPosition'

const Carpet = ({
    column_square1, 
    column_square2,
    raw_square1,
    raw_square2,
    position,
    playerID,
    character,
    toApply
}) => {
    const raw = raw_square1 < raw_square2 ? raw_square1 : raw_square2
    const column = column_square1 < column_square2 ? column_square1 : column_square2
    return (
        <section 
            className='carpet'
            style={{
                backgroundColor : toApply ? 'black' : '#4abcbe',
                opacity : toApply ? '0.6' : '1',
                transform : `rotate(${position ? 0 : 90}deg)`,
                marginTop : `${raw*102 + (position ? 0 : 50)}px`, 
                marginLeft : `${column*100 - (position ? 0 : 50)}px`,
                border : toApply && `solid 1px  ${
                    isSquareAroundPlayer(character, column_square1, raw_square1) 
                    && isSquareAroundPlayer(character, column_square2, raw_square2)
                    ? 'green'
                    : 'red'
                }`
            }}
        >
        </section>
    )
}

export default Carpet