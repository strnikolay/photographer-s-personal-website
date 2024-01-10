import React from 'react'
import "./history.css"
import expir from "./img/experience-icon_yellow.png"
import fotoicon from "./img/fotoicon-yellow.png"
import cust from "./img/icon2-yellow.png"
import PoligonScreenSeparator from './PoligonScreenSeparator'
//import sep from "./separator.svg"

export default function History() {
  return (
    <>
            <div className='history'>
            <div className='exp-item'><img src={expir} alt=""/><p>10 лет опыта в фотографии</p></div>
            <div className='exp-item'><img src={fotoicon} alt=""/><p>1345 профессиональных фотосесий</p></div>
            <div className='exp-item'><img src={cust} alt=""/><p>768 довольных клиентов</p></div>
            
        </div>
        <PoligonScreenSeparator/>
    
    </>

  )
}
