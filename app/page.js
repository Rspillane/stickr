// import styles from './page.module.css'
import React from 'react';

//components
import Hero from "./components/hero/Hero"
import Shopcarousel from './components/shopcarousel/shopcarousel';

export default function index() {
  return (
    <main className>
      <Hero />
      <div className='info'>info section</div>
      <Shopcarousel />

      <div className='cta'>CTA section</div>
    </main>
    
  )
}
