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

  const handleClick = () => {
    setIsTimerStarted((prev) => !prev)
    if (!isTimerStarted) {
      timer.current = setInterval(() => {
        setCounter((prev) => prev + 1)
      }, 1000)
    } else {
      if (timer.current !== null) {
        clearInterval(timer.current)
        timer.current = null
      }
    }
  }

  const buttonText = isTimerStarted ? 'Stop' : 'Start'

  return (
    <>
      <h1>{counter} seconds</h1>
      <button onClick={handleClick}>{buttonText}</button>
    </>
  )
}

export default Counter
