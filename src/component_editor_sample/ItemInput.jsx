import React from 'react'

const ItemInput = (props) => {
  return (
    <label className="label-css">
    {props.text}
    <input 
      className="inp-label"
      type="text"
      // placeholder="Отсуп по оси Y"
      value={props.value}
      onChange={props.onChange}
    />
  </label>
  )
}

export default ItemInput