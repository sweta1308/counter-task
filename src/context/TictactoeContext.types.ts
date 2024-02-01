import React, { ReactNode } from 'react'

type TictactoeProviderProps = {
  children: ReactNode
}

type TictactoeProps = {
  boardValues: string[]
  message: string
  handleBoardClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  handleResetClick: () => void
}

export type { TictactoeProps, TictactoeProviderProps }
