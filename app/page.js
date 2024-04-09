import styles from './page.module.css'
import React, { useState } from 'react';

//components
import Hero from "./components/hero/Hero"
import Shopcarousel from './components/shopcarousel/shopcarousel'
import Info from "./components/info/Info"
import CTA from "./components/cta/cta"

export default function index() {

  const [basketContent, setBasketContent] = useState([]);

  const addToCart = ({id}) => {
    item.quantity++

    setBasketContent([
      ...basketContent,
      { id: {id}, name: {title} }
    ])
    console.log(basketContent)
  };

  return (
    <main className="main">
      <Hero />
      <Info />
      <Shopcarousel />
      <CTA/>
      <footer>
        <div>Hello World</div>
      </footer>
    </main>
  )
}
