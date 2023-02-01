import React from 'react'
import './InputItems.css'
function InputItems(props) {
  return (
    <div className='inputItems'>
        {props.Icon && <props.Icon style={{color:props.color}}/> }
<p>{props.title}</p>
      
    </div>
  )
}

export default InputItems
