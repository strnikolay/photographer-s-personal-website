import React from 'react'
import "./main.css"
import foto from "./img/foto3.png"
//import sep from "./separator.svg"

export default function Main() {
  return (
    <div className='main'>    
        <h1>Фотограф Алексей Мигалин</h1> 
        <p className='deviz'>Увереннность в каждом мгновении</p>       
        <div className='foto_wrapper'>
            <div className='foto' alt=""/>
        </div>
        <div className='lead'>
            <input type="button" className='lead-button' value='Заказать' />
            <h2>Услуги фотографа, фотосессии <br/> 
                и репортажные съемки<br/> 
                в Екатеринбурге.</h2>
        </div>
        <div className='shadow'>
            <div className="separator" />
        </div>
    </div>
  )
}
