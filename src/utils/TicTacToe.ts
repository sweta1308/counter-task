type FindWinnerType = (boardValues: string[]) => string | null

export const findWinner: FindWinnerType = (boardValues) => {
  const boardCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < boardCombinations.length; i++) {
    const [a, b, c] = boardCombinations[i]
    if (
      boardValues[a] &&
      boardValues[a] === boardValues[b] &&
      boardValues[a] === boardValues[c]
    ) {
      return boardValues[a]
    }
  }
  return null
}
