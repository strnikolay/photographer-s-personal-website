import React, { useEffect }  from 'react'
import "./gallery.css"
//import Slider from "./slider"
import one from "./img/3.jpg"
import two from "./img/1.jpg"
import three from "./img/3.jpg"

export default function Gallery() {
  //const slides = document.querySelectorAll ('.slide')
  const [slides, setSlides] = React.useState([])

  console.log(slides)

  useEffect(() => {
    setSlides(document.querySelectorAll ('.slide'))
  }, [])

  for (const slide of slides) {
    slide.addEventListener('click', () => {
        //console.log("11")
        slides.forEach((slide) => {
          slide.classList.remove('active')})
        slide.classList.add("active")
    })
  }

  return (
  <div className='gallery'>    
    <div className="separator-top" />
    <div className="container">
      <div className="slide one active">
        <h3>фотосессии</h3>
        <img className="img_one" src={one} />
        <button className='button left' />
        <button className='button right' />
        <div className='gal-title'>фотосесия 1</div>
        <button className='to-gal-button' value="В галерею">В галерею</button>
        {/*<Slider />*/}
        <div className='gallery'></div>
      </div>
      <div className="slide two">
        <h3>репортажные съемки</h3>
        <img className="img_one" src={two} />
        <button className='button left' />
        <button className='button right' value="В галерею" />
        <div className='gal-title'>репортаж 1</div>
        <button className='to-gal-button' value="В галерею">В галерею</button>
      </div>
      <div className="slide three">
        <h3>съемки мероприятий</h3>
        <img className="img_one" src={three} />
        <button className='button left' />
        <button className='button right' />
        <div className='gal-title'>Мероприятие 1</div>
        <button className='to-gal-button' value="В галерею">В галерею</button>
      </div>
    </div>
    <div className="separator-bottom" />
  </div>
  )
}
