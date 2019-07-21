export const moveCharacter = (setCharacter, character, seller)=>{

    const { direction, raw, column } = character 
    let newCharacter = {...character, rotation : 1 }
    let newRaw = raw
    let newColumn = column
    let newDirection = direction

    const isOdd = (x)=> x%2 === 0
    const directionWhenOutsideBoard = (direction - 2) > 0 ? (direction - 2) : (direction - 2) + 4
  
    // outside in corner up/left and down/right
    if ((raw === 0 && column === 0 && (direction === 1 || direction === 4)  ) || (raw === 6 && column === 6) && (direction === 2 || direction === 3)) {
        newDirection = isOdd(direction) ? (direction - 1): (direction + 1)

    // outside top
    } else if ((raw === 0 && direction === 1)) {
        newColumn = isOdd(column)? (column-1) : (column+1)
        newDirection = directionWhenOutsideBoard

    // outside bottom
    } else if ((raw === 6 && direction === 3)) {
        newColumn = isOdd(column)? (column+1) : (column-1)
        newDirection = directionWhenOutsideBoard

    // outside right
    } else if ((column === 6 && direction === 2)) {
        newRaw = isOdd(raw) ? (raw+1) : (raw-1)
        newDirection = directionWhenOutsideBoard

    // outside left
    } else if ((column === 0 && direction === 4)) {
        newRaw = isOdd(raw) ? (raw-1) : (raw+1)
        newDirection = directionWhenOutsideBoard

    // in board
    } else {
        switch(direction) {
            // up
            case 1 :
                newRaw = (raw - 1)
            break
            // right
            case 2 :
                newColumn = (column + 1)
            break
            // down
            case 3 :
                newRaw = (raw + 1)
            break
            // left
            case 4 :
                newColumn = (column - 1)
            break
            default :
          }
    }
    seller(
        {
            ...newCharacter, 
            raw : newRaw,
            column : newColumn,
            direction : newDirection 
        }, 
        (err, sellerData)=> {
            setCharacter(sellerData[0])
        }
    )
}

export const launchDice = (setDiceResult, setDisplayDiceResult) => {
    const result = Math.floor(Math.random() * (4 - 1) + 1)
    setDisplayDiceResult(result)
    setDiceResult(result)
}


export const turnCharacter = (setCharacter, character, turn, seller) => {
    
    const { direction, rotation } = character  
    let newCharacter

    switch(turn) {
      // Left
      case 1 :
          newCharacter = rotation === 0 
          ? character
          : {
            ...character, 
            rotation : (rotation - 1),
            direction : direction === 1 ? 4 : (direction - 1)
          }
      break
      // Right
      case 2 :
          newCharacter = rotation === 2
          ? character
          : {
            ...character, 
            rotation : (rotation + 1),
            direction : direction === 4 ? 1 : (direction + 1)
          }
      break
      default :
    }
    seller(newCharacter, (err, sellerData)=> setCharacter(sellerData[0]))
}
