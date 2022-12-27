import React from 'react'
import './modal.css'
export default function Modal({ children, active, setActive }) {
  return (
    <div className={`${active?'myModal active':'myModal'}`} onClick={()=>{setActive(false)}}>
      <div className={'modalContent'} onClick={(e)=>{e.stopPropagation()}}>
        {children}
      </div>
    </div>
  ); }
