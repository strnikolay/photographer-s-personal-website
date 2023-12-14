import React from 'react'
import "./reviews.css"

function Reviews() {
  return (
    <section className='reviews'>
    <div className='title'>Отзывы</div>
    <div className='reviews-wrapper'>
        <div className='foto'></div>
        <div className='text'></div>
    </div>
    <button className='button left' />
    <button className='button right' />
    
    </section>

  )
}

export default Reviews