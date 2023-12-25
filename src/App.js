import React from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Gallery from './components/gallery/gallery';
import Services from './components/service/services';
import Faq from './components/FAQ/faq';
import Reviews from './components/reviews/reviews';

function App() {

  const html = document.documentElement;
  const resizeHanlder = () => {
      const winwidth = window.innerWidth;
      html.style.fontSize = (winwidth/100)+'px';
  };

  React.useEffect(() => {
    resizeHanlder();
    window.addEventListener('resize', resizeHanlder);
      return () => 
    window.removeEventListener('resize', resizeHanlder);
  }, []);

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Services />
      <Gallery/>
      <Faq/>
      <Reviews/>
    </div>
  );
}

export default App;
