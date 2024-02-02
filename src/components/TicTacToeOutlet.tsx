import { TictactoeProvider } from 'context/TictactoeContext'
import { Outlet } from 'react-router'

export const TicTacToeOutlet = () => {
  return (
    <TictactoeProvider>
      <Outlet />
    </TictactoeProvider>
  )
}
