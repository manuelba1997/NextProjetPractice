/*import { useState } from 'react'*/
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';


function App() {
    return ( <main>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      
    </main>
  );  
};
export default App

