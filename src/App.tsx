import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/home';
import Header from '../src/components/header'
import Footer from '../src/components/footer'
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './pages/privacy-policy';
import RefundPolicy from './pages/refund-policy';
import TermCondition from './pages/term-condition';
import background from './assets/athos-background.jpg'
import whatsAppIcon from './assets/icons/whatsapp_color.png'

function App() {
  return (
    <div className="App">
      <Header />
      <img src={background} className="background-img"></img>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={< PrivacyPolicy/>} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/term-condition" element={<TermCondition />} />
      </Routes>
      <div className="float-icon">
    <a href="https://api.whatsapp.com/send?phone=601152224333" target="_blank"><img
        src={whatsAppIcon} alt="whatsapp"></img></a>

</div>
      <Footer />
    </div>
  );
}

export default App;
