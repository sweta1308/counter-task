import React, { useRef, useState } from 'react'
import {
  counterType,
  CounterProps,
  timerType,
  timerStartedType,
} from './Counter.types'

const Counter: React.FC<CounterProps> = () => {
  const [counter, setCounter] = useState<counterType>(0)
  const [isTimerStarted, setIsTimerStarted] = useState<timerStartedType>(false)
  const timer = useRef<timerType>(null)

  const handleStartClick = () => {
    setIsTimerStarted(true)
    timer.current = setInterval(() => {
      setCounter((prev) => prev + 1)
    }, 1000)
  }

  const handleStopClick = () => {
    setIsTimerStarted(false)
    if (timer.current !== null) {
      clearInterval(timer.current)
      timer.current = null
    }
  }

  return (
    <>
      <h1>{counter} seconds</h1>
      {!isTimerStarted ? (
        <button onClick={handleStartClick}>Start</button>
      ) : (
        <button onClick={handleStopClick}>Stop</button>
      )}
    </>
  )
}

export default Counter
