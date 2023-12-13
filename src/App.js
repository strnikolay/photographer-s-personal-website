import './App.css';
import Header from './components/header';
import Main from './components/main';
import Gallery from './components/gallery/gallery';
import Price from './components/price';

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Main/>
      <Gallery/>*/}
      <Price />
    </div>
  );
}

export default App;
