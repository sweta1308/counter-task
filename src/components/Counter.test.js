import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Counter from './Counter'

jest.useFakeTimers()

describe('counter test', () => {
  test('test for render of start button', () => {
    render(<Counter />)
    const startBtn = screen.getByTestId('Start')
    expect(startBtn).toBeInTheDocument()
  })

  test('test for start of timer', () => {
    render(<Counter />)
    const startButton = screen.getByTestId('Start')
    fireEvent.click(startButton)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('1 seconds')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('2 seconds')).toBeInTheDocument()
  })

  test('test for stop of timer', () => {
    render(<Counter />)
    const startBtn = screen.getByTestId('Start')
    fireEvent.click(startBtn)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('1 seconds')).toBeInTheDocument()

    const stopBtn = screen.getByTestId('Stop')
    fireEvent.click(stopBtn)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('1 seconds')).toBeInTheDocument()
  })
})
