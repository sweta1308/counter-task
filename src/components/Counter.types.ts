/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { MouseEventHandler, ReactNode } from 'react'

export interface CounterProps {}
export type counterType = number
export type timerStartedType = boolean
export type timerType = NodeJS.Timeout

export type ButtonProps = {
  children: ReactNode
  handleClick: MouseEventHandler<HTMLButtonElement>
  id: string
}
