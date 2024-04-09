'use client'

import React from 'react'
import Image from 'next/image'
import styles from "./styles.modules.css"
import TextField from '@mui/material/TextField';

export default function CTA () {
    return (
        <main>
            <div className='cta'>
                <h1>Join Our Mailing List</h1>
                <p>Hear about our new products or if you have any ideas of your own, let us know!</p>
                <form className='signup-form'>
                    {/* <TextField id="standard-basic" label="email" variant="standard" /> */}
                    <input type="text" className="form__input" id="email" placeholder="Enter email" required="" />
                    {/* <label for="email" class="form__label">Enter email</label> */}
                    <button className='submit-button'>Sign up!</button>
                </form>
            </div>
        </main>
    )
}