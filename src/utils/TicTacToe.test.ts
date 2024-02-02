import { findWinner } from './TicTacToe'

describe('finding winner tests', () => {
  test('test for empty board', () => {
    const boardValues = ['', '', '', '', '', '', '', '', '']
    expect(findWinner(boardValues)).toBeNull()
  })

  test('test for tie', () => {
    const boardValues = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O']
    expect(findWinner(boardValues)).toBeNull()
  })

  test('test if X wins', () => {
    const boardValues = ['X', 'X', 'X', 'O', '', '', '', 'O', '']
    expect(findWinner(boardValues)).toBe('X')
  })

  test('test if O wins', () => {
    const boardValues = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'O', '']
    expect(findWinner(boardValues)).toBe('O')
  })

  test('test for winner in diagonal', () => {
    const boardValues = ['X', 'O', 'X', 'O', 'X', '', '', 'O', 'X']
    expect(findWinner(boardValues)).toBe('X')
  })
})
