import React from 'react'
import './style.css'

type Props = {
  color: "red" | "blue" | "green"
  disabled: boolean
}

const Button2: React.FC<Props> = ({color, disabled}) => {

  console.log(color)
  console.log(disabled)

  return (
    <button disabled={disabled} className={color}>ose</button>
  )
}

export default Button2