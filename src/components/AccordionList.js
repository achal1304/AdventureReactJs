import React from 'react'
import '../assets/styles/accordion.css'

function AccordionList(props) {

  return (
    <div className='accordion_wrapper'>
        {props.feature.map((item, index) => {
            return (
                <div key={index}>{item}</div>
            )
        })}
    </div>
  )
}

export default AccordionList