'use client'

import React from 'react'
import Image from 'next/image'
import styles from "./styles.modules.css"
import HeroImage from "../assets/images/RangeRover.png"
import HeroImage1 from "../assets/images/RR1.png"

export default function Hero () {
    return (
        <main>
            <div className='hero'>
                <div className='content'>
                    <h1> stickr </h1>
                    <p> Your One-Stop Shop for High-Quality Stickers: Explore Our Selection Today!</p>
                </div>
                <Image 
                    src={ HeroImage }
                    height={300}
                    width={300}
                    alt='Car Sticker'
                />
                <Image
                    src={ HeroImage1 }
                    height={300}
                    width={300}
                    alt='Car Sticker'
                />
            </div>
        </main>
    )
}
