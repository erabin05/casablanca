import React from 'react'

const Carpet = ({
    column_square1, 
    column_square2,
    raw_square1,
    raw_square2,
    playerID
}) => {
    const raw = raw_square1 < raw_square2 ? raw_square1 : raw_square2
    const column = column_square1 < column_square2 ? column_square1 : column_square2
    return (
        <section 
            className='carpet'
            style={{
                marginTop : `${raw*100}px`, 
                marginRight : `${column*100}px` 
            }}
        >
        </section>
    )
}

export default Carpet