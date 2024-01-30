import { useState, useEffect } from "react";
import { Button } from "./Button";
import {
  counterType,
  timerStartedType,
  timerType,
  CounterProps,
} from "./Counter.types";

export const Counter: React.FC<CounterProps> = () => {
  const [counter, setCounter] = useState<counterType>(0);
  const [isTimerStarted, setIsTimerStarted] = useState<timerStartedType>(false);

  useEffect(() => {
    let timerId: timerType;
    if (isTimerStarted) {
      timerId = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [isTimerStarted]);

  const handleClick = () => setIsTimerStarted((prev) => !prev);

  return (
    <>
      <h1>{counter} seconds</h1>
      {isTimerStarted ? (
        <Button handleClick={handleClick}>Stop</Button>
      ) : (
        <Button handleClick={handleClick}>Start</Button>
      )}
    </>
  );
};
