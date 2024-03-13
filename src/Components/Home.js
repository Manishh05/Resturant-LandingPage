import React from 'react'
import { BrowserRouter ,Route, Router, Routes } from 'react-router-dom';
import Menu from './Menu';
import Header from './Header';
import Hero from './Hero';
import Reservation from './Reservation'
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <Header />
    <Hero />
    <Menu />
    <Reservation />
    <Footer />
    </>
  )
}

export default Home