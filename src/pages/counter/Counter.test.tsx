import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Counter from './Counter'
import { BrowserRouter } from 'react-router-dom'

jest.useFakeTimers()

describe('counter test', () => {
  test('test for render of start button', () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>,
    )
    const startBtn = screen.getByText('Start')
    expect(startBtn).toBeInTheDocument()
  })

  test('test for start of timer', () => {
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>,
    )
    const startButton = screen.getByText('Start')
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
    render(
      <BrowserRouter>
        <Counter />
      </BrowserRouter>,
    )
    const startBtn = screen.getByText('Start')
    fireEvent.click(startBtn)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('1 seconds')).toBeInTheDocument()

    const stopBtn = screen.getByText('Stop')
    fireEvent.click(stopBtn)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('1 seconds')).toBeInTheDocument()
  })
})
