import './App.css';
import Navbar from './components/Navbar/Navbar'
import Jersey from './components/Product-card/productCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Product-card/productCard.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <h2 className='title'>Regular Jerseys:</h2>
        <div className='row'>
          <Jersey title='Nuggets' subtitle='Alernative Jersey' price={210} img='./denver-oscura.jpg' />
          <Jersey title='Golden State' subtitle='Original Jersey' price={190} img='./goldenState-titu.jpg' />
          <Jersey title='Philadelphia' subtitle='Original Jersey' price={185} img='./76ers-titu.jpg' />
        </div>
        <h2 className='title'>Allstart Jerseys Edition:</h2>
        <div className='row'>
          <Jersey title='Lebron Team' subtitle='Original Jersey' price={260} img='./all-star-edition-grey.jpg' />
          <Jersey title='KD Team' subtitle='Original Jersey' price={260} img='./all-star-edition-pink.jpg' />
          <Jersey title='Jordan' subtitle='Original Jersey' price={330} img='./all-star-retro.jpg' />
        </div>
      </div>
    </div>
  );
}

export default App;
