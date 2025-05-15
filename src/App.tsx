import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {

  useEffect(() => {
    document.title = "Irving Craig Real";
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}