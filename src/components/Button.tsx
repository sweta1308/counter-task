import { ButtonProps } from './Counter.types'

export const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  return <button onClick={handleClick}>{children}</button>
}
