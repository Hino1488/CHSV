import React from 'react'
import "./Button.css"
export const Button = ({title, variant="primary", className }) => {
  return (
    <button className={`${variant} ${className}`}>{title}</button>
  )
}
