// Have the function SudokuQuadrantChecker(strArr) read the strArr parameter being passed which will represent a 9x9 Sudoku board of integers ranging from 1 to 9. The rules of Sudoku are to place each of the 9 integers integer in every row and column and not have any integers repeat in the respective row, column, or 3x3 sub-grid. The input strArr will represent a Sudoku board and it will be structured in the following format: ["(N,N,N,N,N,x,x,x,x)","(...)","(...)",...)] where N stands for an integer between 1 and 9 and x will stand for an empty cell. Your program will determine if the board is legal; the board also does not necessarily have to be finished. If the board is legal, your program should return the string legal but if it isn't legal, it should return the 3x3 quadrants (separated by commas) where the errors exist. The 3x3 quadrants are numbered from 1 to 9 starting from top-left going to bottom-right.
// For example, if strArr is: ["(1,2,3,4,5,6,7,8,1)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(1,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)"] then your program should return 1,3,4 since the errors are in quadrants 1, 3 and 4 because of the repeating integer 1.
// Another example, if strArr is: ["(1,2,3,4,5,6,7,8,9)","(x,x,x,x,x,x,x,x,x)","(6,x,5,x,3,x,x,4,x)","(2,x,1,1,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,9)"] then your program should return 3,4,5,9.

function sudokuQuadrantChecker(strArray) {
  // reformat strArray to 2D Array
  for (let i=0; i<9; i++) {
    strArray[i] = strArray[i].substring(1, strArray[i].length-1)
    strArray[i] = strArray[i].split(',')
  }
  // creating hash
  let invalidQuad = []
  let board = {
    'row': {},
    'col': {},
    'quad': {}
  }
  for (let r=0; r<9; r++) {
    for (let c=0; c<9; c++) {
      const box = strArray[r][c]
      const boxIndex = parseInt(box) - 1
      const q = Math.trunc(r/3)*3 + Math.trunc(c/3) + 1
      
      if (box === 'x') {
        continue;
      }

      // record rows with entry
      // if row is not created in box
      if (!board['row'][r] && box !== 'x'){
        board['row'][r] = new Array(9).fill(null)
        board['row'][r][boxIndex] = box
      }
      // if row is recorded and 'N' is not in there
      else if (!(board["row"][r].includes(box))) {
        board['row'][r][boxIndex] = box
      }
      // if 'N' is row-duplicate
      else if (board['row'][r].includes(box)) {
        const c2 = board['row'][r].indexOf(boxIndex+1)
        const q2 = Math.trunc(r/3)*3 + Math.trunc(c2/3) + 1
        if (!invalidQuad.includes(q)){
          invalidQuad.push(q)
        }
        if (!invalidQuad.includes(q2)){
          invalidQuad.push(q2)
        }
      }   
      // record col with entry
      // if col is not created in box
      if (!board['col'][c] && box !== 'x'){
        board['col'][c] = new Array(9).fill(null)
        board['col'][c][parseInt(box)] = box
      }
      // if col is recorded and 'N' is not in there
      else if (!board['col'][c].includes(box)) {
        board['col'][c][boxIndex] = box
      }
      // if 'N' is col-duplicate
      else if (board['col'][c].includes(box)) {
        const r2 = board['col'][c].indexOf(boxIndex+1)
        const q2 = Math.trunc(r2/3)*3 + Math.trunc(c/3) + 1
        if (!invalidQuad.includes(q)){
          invalidQuad.push(q)
        }
        if (!invalidQuad.includes(q2)){
          invalidQuad.push(q2)
        }
      }

      // quadrant check
      if (!board['quad'][q] && box !== 'x'){
        board['quad'][q] = []
        board['quad'][q].push(box)
      }
      // if row is recorded and 'N' is not in there
      else if (!board['quad'][q].includes(box)) {
        board['quad'][q].push(box)
      }
      // if 'N' is quad-duplicate
      else if (board['quad'][q].includes(box)) {
        if (!invalidQuad.includes(q)){
          invalidQuad.push(q)
        }
        
      } 

    }
  }
  if (invalidQuad.length === 0) {
    return 'legal';
  }
  return invalidQuad.sort().toString()
}

module.exports = sudokuQuadrantChecker;
