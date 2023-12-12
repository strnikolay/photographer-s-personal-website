import React from 'react'
import "./main.css"
import foto from "./foto.png"

export default function Main() {
  return (
    <div className='main'>
        <h1>Фотограф Алексей Мигалин</h1>        
        <div className='foto_wrapper'>
            <img src={foto} />
        </div>
        <div className='lead'>
            <input type="button" className='lead-button' value='Заказать' />
            <h2>Услуги фотографа, <br/> 
                репортажные съемки<br/> 
                и фотосессии <br/>
                в Екатеринбурге.</h2>
        </div>
    </div>
  )
}
