import { MouseEventHandler, ReactNode } from 'react'

export type CounterProps = object
export type counterType = number
export type timerStartedType = boolean
export type timerType = NodeJS.Timeout

export type ButtonProps = {
  children: ReactNode
  handleClick: MouseEventHandler<HTMLButtonElement>
}
