'use client'

import React from 'react'
import Image from 'next/image'
import backgroundImage  from '../assets/images/porsche.jpeg'
import styles from "./styles.modules.css"

export default function Hero () {
    return (
        <main>
            <div className='hero'>
                <div className='content'>
                    <h1> stickr </h1>
                    <p> Your One-Stop Shop for High-Quality Stickers: Explore Our Selection Today!</p>
                </div>
                <div className='background-image'></div>
            </div>
        </main>
    )
}
