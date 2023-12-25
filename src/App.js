import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Gallery from './components/gallery/gallery';
import Services from './components/service/services';
import Faq from './components/FAQ/faq';
import Reviews from './components/reviews/reviews';


function App() {
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
