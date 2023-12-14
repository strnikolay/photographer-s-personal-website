import React from 'react'
import "./faq.css"

function Faq() {
  return (
    <div className='faq-wrapper'>
        <div className='title'>Вопросы и ответы</div>
       <details>
            <summary>Как происходит подготовка?</summary>
            <div className='rect'></div>
            <p>Обсуждаем стилистику съёмки, обсуждаем образы, готовим реквизит и аксессуары, подключаем маркетолога к подготовке</p>
        </details>
        <details>
            <summary>Как быстро будет готов результат?</summary>
            <div className='rect'></div>
            <p>Исходники уже на следующий день после съёмки, фото в обработке уже через 7 дней</p>
        </details>
        <details>
            <summary>Где  лучше провести фотосессию?</summary>
            <div className='rect'></div>
            <p>  Место для проведения фотосессии я всегда подбираю исходя из пожеланий клиента, выбора образа и времени года. В плохую погоду мы можем провести съёмку в студии или в кафе. Локации на улице подбираются индивидуально.</p>
        </details>
    </div>
  )
}

export default Faq