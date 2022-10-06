import React from 'react'

type Props = {
  disabled: boolean
  type: "date" | "email" | "radio"
}

const Checkbox: React.FC<Props> = ({ disabled, type }) => {

  return (
    <>
      <input disabled={disabled} type={type} />
    </>
  )
}

export default Checkbox