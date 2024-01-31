import React, { useRef, useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState<number>(0)
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false)
  const timer = useRef<NodeJS.Timeout | undefined>(undefined)

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
