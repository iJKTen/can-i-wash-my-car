import { Fragment } from 'react';
import './App.css';
import { Weather } from './Components/Weather';
import Header from './Header';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

function App() {
  return (
    <Fragment>
      <header className='bg-color-three text-center pt-4 pb-4'>
        <Header />
      </header>
      <div className="App">
        <Weather />
      </div>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
}

export default App;
