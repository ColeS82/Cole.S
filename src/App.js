import Home from './components/Home/Home'
import Header from './components/Header/Header';
import Aboutme from './components/Aboutme/Aboutme';
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import {Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/cole.s' element={<Home />} />
        <Route path='/Aboutme' element={<Aboutme />} />
      </Routes>
      {/* <Home />
      <Aboutme /> */}
      <Footer />
      </>
  );
}
console.log(window.location.pathname)

export default App;
