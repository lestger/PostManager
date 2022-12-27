import React from 'react'
import './button.css'
export default function MyButton({children, onClick, style}) {
  return (
    <button className={'primarybtn'} style={style} onClick={onClick}>{children}</button>
  )
}
