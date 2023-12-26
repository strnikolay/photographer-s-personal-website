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
                <p className='l1'>Фотосесия</p>
            </div>
            <div className='desc'>
            <p className='d1'>-Фотосесия - 4000 руб.\час</p>
            <p className='d2'>- Стилизация образа и постановка.</p>
            <p className='d3'>- Выбор студии</p> 
            <p className='d4'>Отдельно оплачиваются:</p>
            <p className='d4'>- аренда студии </p>
            <p className='d4'>- услуги визажиста — 2500 руб.</p>
            <p className='d5'>Бонус:</p>
            <p className='d6'>видеоролик 1,5 мин.</p>
            <input className='lead' name="lead" type='button' value="ЗАКАЗАТЬ"/>
            </div>
        </div>


        <div className='service s-two'>
        <div className='logo-wrap'>
                <img className='logo' src={serv_logo}/>
                <p className='l2'>Мероприятие</p>
            </div>
            <div className='desc'>
            <p className='d1'>-Мероприятие - 4000 руб.\час</p>
            <p className='d2'>-</p>
            <p className='d3'>- </p> 
            <p className='d4'>Отдельно оплачиваются:</p>
            <p className='d4'>-  </p>
            <p className='d4'>- </p>
            <p className='d5'>Бонус:</p>
            <p className='d6'>видеоролик 1,5 мин.</p>
            <input className='lead' name="lead" type='button' value="ЗАКАЗАТЬ"/>
            </div>
        </div>

        <div className='service s-three'>
        <div className='logo-wrap'>
                <img className='logo' src={serv_logo}/>
                <p className='l3'>Репортаж</p>
            </div>
            <div className='desc'>
            <p className='d1'>-Репортаж - 4000 руб.\час</p>
            <p className='d2'>-</p>
            <p className='d3'>- </p> 
            <p className='d4'>Отдельно оплачиваются:</p>
            <p className='d4'>-  </p>
            <p className='d4'>- </p>
            <p className='d5'>Бонус:</p>
            <p className='d6'>видеоролик 1,5 мин.</p>
            <input className='lead' name="lead" type='button' value="ЗАКАЗАТЬ"/>
            </div>
        </div>

    </div>   
    </div>
  )
}

export default Services