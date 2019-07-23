import React from 'react'

const Board = ({
    squares,
    styleSquare,
    handleClickOnSquare
}) => (
    <section className='squares'>
        {squares.map((rows, i)=>(
        <div className='row' key={i}>
          {rows.map((square, j)=>
            <div 
              className='square' 
              key={j}
              style={styleSquare(i,j)}
              onClick={()=>handleClickOnSquare(i, j)}
            ></div>
          )}
        </div>
      ))}
    </section>
)

export default Board