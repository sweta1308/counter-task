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
  const timer = useRef<timerType>(undefined)

  const handleClick = () => {
    setIsTimerStarted((prev) => !prev)
    if (!isTimerStarted) {
      timer.current = setInterval(() => {
        setCounter((prev) => prev + 1)
      }, 1000)
    } else {
      clearInterval(timer.current)
      timer.current = undefined
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
