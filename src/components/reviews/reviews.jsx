import React from 'react'
import "./reviews.css"

function Reviews() {
  return (
    <section className='reviews'>
      <div className='title'>Отзывы</div>
      <div className='reviews-wrapper'>
        <input type='button' className='button left' />
        <div className='foto'></div>
        <div className="border-item">
          <div className="border-head">Иванов Иван</div>
          <p>Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва Текст отзыва</p>
        </div>
        <input type='button' className='button right' />
      </div>
    </section>

  )
}

export default Reviews