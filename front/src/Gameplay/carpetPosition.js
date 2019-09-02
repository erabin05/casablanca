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

export const isCarpetNotOnOtherCarpet = (
  column_square1, 
  column_square2,
  raw_square1,
  raw_square2,
  allCarpets
) => (
  allCarpets.find((carpet) => (
    carpet.column_square1 === column_square1
    && carpet.column_square2 === column_square2
    && carpet.raw_square1 === raw_square1
    && carpet.raw_square2 === raw_square2
  )).length
)

export const carpetColor = player => {
  switch (player){
      case 1 :
      return '#2d7f81'
      case 2 :
      return '#bf0e0e'
      case 3 :
      return '#f0de2d'
      case 4 :
      return '#734c23'
      default :
          return 'red'
  }
}