'use client'

import React from 'react'
import Image from 'next/image'
import styles from "./styles.modules.css"
import HeroImage from "../assets/images/RangeRover.png"
import HeroImage1 from "../assets/images/RR1.png"
import HeroImage2 from "../assets/images/Design.png"


export default function Hero () {
    return (
        <main>
            <div className='hero'>
                <div className='content'>
                    <h1 className='hero-title'> stickr </h1>
                    <p> Your One-Stop Shop for High-Quality Stickers: Explore Our Selection Today!</p>
                </div>
                <div className='hero-images'>
                    <Image 
                        className='hero-image'
                        id='h-image-1'
                        src={ HeroImage2 }
                        height={300}
                        width={300}
                        alt='Car Sticker'
                    />
                    <Image
                        className='hero-image'
                        id='h-image-2'
                        src={ HeroImage }
                        height={300}
                        width={300}
                        alt='Car Sticker'
                    />
                    <Image
                        className='hero-image'
                        id='h-image-3'
                        src={ HeroImage1 }
                        height={300}
                        width={300}
                        alt='Car Sticker'
                    />
                </div>
            </div>
            <svg id='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="cadetblue" fill-opacity="1" d="M0,128L34.3,106.7C68.6,85,137,43,206,37.3C274.3,32,343,64,411,112C480,160,549,224,617,234.7C685.7,245,754,203,823,154.7C891.4,107,960,53,1029,32C1097.1,11,1166,21,1234,42.7C1302.9,64,1371,96,1406,112L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        </main>
    )
}
