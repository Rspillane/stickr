// import styles from './page.module.css'
import React from 'react';

//components
import Hero from "./components/hero/Hero"
import Shopcarousel from './components/shopcarousel/shopcarousel'
import Info from "./components/info/Info"

export default function index() {
  return (
    <main className>
      <Hero />
      <Info />
      <Shopcarousel />

      <section className='cta'>CTA section</section>
      <footer>

      </footer>
    </main>
    
  )
}
