/* eslint-disable no-undef */
import { ButtonProps } from './Counter.types'

export const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  id,
}) => {
  return (
    <button data-testid={id} onClick={handleClick}>
      {children}
    </button>
  )
}
