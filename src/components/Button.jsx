/* eslint-disable react/prop-types */
import './Button.css'

export const Button = ({id, text}) => {
  return (
    <button id={id}>{text}</button>
  )
}