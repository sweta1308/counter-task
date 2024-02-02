import { ReactNode } from 'react'

type TictactoeProviderProps = {
  children: ReactNode
}

type TictactoeProps = {
  boardValues: string[]
  message: string
  handleCellClick: (i: number) => void
  handleResetClick: () => void
}

export type { TictactoeProps, TictactoeProviderProps }
