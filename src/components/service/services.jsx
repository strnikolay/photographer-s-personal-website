import React from 'react'
import "./services.css"
import serv_logo from "./service-logo.svg"

function Services() {
  return (
    <div className='services'>
    <div className='title'>Виды услуг и цена</div>    
    <div className='service-wrapper'>
        <div className='service s-one'>
            <div className='logo-wrap'>
                <img className='logo' src={serv_logo}/>
                <span className='l1'>MINI</span>
            </div>
            <div className='desc'>
            <span className='d1'>- Индивидуальная, групповая - 4000 руб.\час</span><br/>
            <span className='d2'>- Стилизация образа и постановка.</span><br/>
            <span className='d3'>- Выбор студии</span> <br/><br/> 
            <span className='d4'>Отдельно оплачиваются:</span><br/> 
            <span className='d4'>- аренда студии — по тарифам студии</span><br/>
            <span className='d4'>- услуги визажиста — 2500 руб.\образ</span><br/><br/>
            <br/>
            <span className='d2'>Бонус — видеоролик 1,5 мин.</span>
            <input className='lead' type='button' value="ЗАКАЗАТЬ"/>
            </div>
        </div>


        <div className='service s-two'>

            <div className='logo-wrap'>
                <img className='logo' src={serv_logo}/>
                <span className='l2'>STANDART</span>
            </div>
            <div className='desc'>
            <span className='d1'>- Индивидуальная, групповая - 4000 руб.\час</span><br/>
            <span className='d2'>- Стилизация образа и постановка.</span><br/>
            <span className='d3'>- Выбор студии</span> <br/><br/> 
            <span className='d4'>Отдельно оплачиваются:</span><br/> 
            <span className='d4'>- аренда студии — по тарифам студии</span><br/>
            <span className='d4'>- услуги визажиста — 2500 руб.\образ</span><br/><br/>
            <br/>
            <span className='d2'>Бонус — видеоролик 1,5 мин.</span>
            <input className='lead' type='button' value="ЗАКАЗАТЬ"/>
            </div>
        </div>

        <div className='service s-three'>

            <div className='logo-wrap'>
                <img className='logo' src={serv_logo}/>
                <span className='l3'>PREMIUM</span>
            </div>
            <div className='desc'>
            <span className='d1'>- Индивидуальная, групповая - 4000 руб.\час</span><br/>
            <span className='d2'>- Стилизация образа и постановка.</span><br/>
            <span className='d3'>- Выбор студии</span> <br/><br/> 
            <span className='d4'>Отдельно оплачиваются:</span><br/> 
            <span className='d4'>- аренда студии — по тарифам студии</span><br/>
            <span className='d4'>- услуги визажиста — 2500 руб.\образ</span><br/><br/>
            <br/>
            <span className='d2'>Бонус — видеоролик 1,5 мин.</span>
            <input className='lead' type='button' value="ЗАКАЗАТЬ"/>
            </div>
        </div>

    </div>   
    </div>
  )
}

export default Services