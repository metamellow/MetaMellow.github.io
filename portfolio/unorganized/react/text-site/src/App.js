import logo from './logo.svg';

import Nav from './components/Nav';
import Promo from './components/Promo';
import Intro1 from './components/Intro1'; 
import Intro2 from './components/Intro2'; 
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

import './App.css';

function App() {
  return(
    <>
      <Nav/>
      <Promo/>
      <Intro1/>
      <Intro2/>
      <Intro3/>
      <Footer/>
    </>
  );
}

export default App;
