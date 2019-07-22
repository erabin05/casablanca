import React from 'react'

import { isSquareAroundPlayer } from '../Gameplay/carpetPosition'

const Carpet = ({
    column_square1, 
    column_square2,
    raw_square1,
    raw_square2,
    playerID,
    character,
    carpetPosition
}) => {
    const raw = raw_square1 < raw_square2 ? raw_square1 : raw_square2
    const column = column_square1 < column_square2 ? column_square1 : column_square2
    return (
        <section 
            className='carpet'
            style={{
                transform : `rotate(${carpetPosition ? 0 : 90}deg)`,
                marginTop : `${raw*102 + (carpetPosition ? 0 : 50)}px`, 
                marginLeft : `${column*100 - (carpetPosition ? 0 : 50)}px`,
                border : `solid 2px  ${
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