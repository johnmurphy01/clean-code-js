function getFlaggedCells() {
  const flaggedCells = []
  for (var cell in gameBoard) {
    if (cell[STATUS_VALUE] === FLAGGED) {
      flaggedCells.push(cell[STATUS_VALUE])
    }
  }
  return flaggedCells
}

function getFlaggedCells() {
  const flaggedCells = []
  gameBoard.map((row) => {
    row.map((cell) => {
      if (cell.isFlagged()) {
        flaggedCells.push(cell)
      }
    })
  })
  return flaggedCells
}
