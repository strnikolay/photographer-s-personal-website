import React from 'react'
import "./main.css"
import foto from "./foto2.png"
import expir from "./experience-icon_yellow.png"
import fotoicon from "./fotoicon-yellow.png"
import cust from "./icon2-yellow.png"
//import sep from "./separator.svg"

export default function Main() {
  return (
    <div className='main'>    
        <h1>Фотограф Алексей Мигалин</h1> 
        <h2>Увереннность в каждом мгновении</h2>       
        <div className='foto_wrapper'>
            <img src={foto} alt=""/>
        </div>
        <div className='lead'>
            <input type="button" className='lead-button' value='Заказать' />
            <h2>Услуги фотографа, фотосессии <br/> 
                и репортажные съемки<br/> 
                в Екатеринбурге.</h2>
        </div>
        <div className='shadow'>
            <div class="separator" />
        </div>
        <div className='history'>
            <div className='exp-item'><img src={expir} />10 лет опыта в фотографии</div>
            <div className='exp-item'><img src={fotoicon} />1345 профессиональных фотосесий</div>
            <div className='exp-item'><img src={cust}/>768 довольных клиентов</div>
        </div>
        {/*<section class="col-3 ss-style-invertedrounded">
            <div class="column">
            <p>Inverted Round</p>
            </div>
        </section>*/}
    </div>
  )
}
