// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  const STATUS_VALUE: number = 0
  const FLAGGED: number = 4

  var gameBoard: number[][]

  function getFlaggedCells(): number[] {
    const flaggedCells: number[] = []
    gameBoard.map((row) => {
      row.map((cell) => {
        if (cell[STATUS_VALUE] === FLAGGED) {
          flaggedCells.push(cell[STATUS_VALUE])
        }
      })
    })
    return flaggedCells
  }
}

// in order to avoid errors about duplicate block-scoped variables and functions
;() => {
  var gameBoard: Cell[][]

  function getFlaggedCells(): Cell[] {
    const flaggedCells: Cell[] = []
    gameBoard.map((row) => {
      row.map((cell) => {
        if (cell.isFlagged()) {
          flaggedCells.push(cell)
        }
      })
    })
    return flaggedCells
  }

  class Cell {
    private statusValue: number

    isFlagged(): boolean {
      return this.statusValue === 4
    }
  }
}
