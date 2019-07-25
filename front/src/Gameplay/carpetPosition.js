export const isSquareAroundPlayer = ({raw, column}, sc, sr) => {
    // sc === SquareColumn // sr === SquareRaw
    // cc === characterColumn // cr === characterRaw
    const cc = column
    const cr = raw
    if ( sc > 6 || sr > 6 || sc < 0 || sr < 0) {
      return false
    } else if ((sc === cc-1 || sc === cc+1) && (cr+2 > sr) && (sr > cr-2)) {
      return true
    } else if ((sc === cc-2 || sc === cc+2) && (cr+1 > sr) && (sr > cr-1)) {
      return true
    } else if ((sc === cc) && ((sr > cr-3 && sr < cr) || (sr > cr && sr < cr+3))){
      return true
    } else {
      return false
    }
  }