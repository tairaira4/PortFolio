import React from 'react'
import './style.css'

type Props = {
  color: "red" | "blue" | "green" | "pink" | "black"
  disabled: boolean
  size: "small" | "medium" | "large"
  label: string
}


const Button3:React.FC<Props> = ({color, disabled, size, label}) => {
  return (
    <>
      <button className={color} disabled={disabled} >
        {label}
      </button>
    </>
  )
}

export default Button3