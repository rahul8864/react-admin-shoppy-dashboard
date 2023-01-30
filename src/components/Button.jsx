import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClick, initialState } = useStateContext()
  return (
    <button type='button' style={{background: bgColor, color, borderRadius}} className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`} onClick={() => setIsClick(initialState)}>
      {icon} {text}
    </button>
  )
}

export default Button
