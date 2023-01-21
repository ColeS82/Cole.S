import Home from './components/Home/Home'
import Header from './components/Header/Header';
import Aboutme from './components/Aboutme/Aboutme';
import Crypto from './components/Crypto/crypto';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/cole.s' element={<Home />} />
        <Route path='/Aboutme' element={<Aboutme />} />
        <Route path='/Crypto' element= {<Crypto />}/>
      </Routes>
      <Footer />
    </>
  );
}


export default App;
