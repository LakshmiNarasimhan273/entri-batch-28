import React from 'react'
import Button from './Button'

import "./hero.css"

function Hero() {
  return (
    <div className='hero-container'>
        <h1>Welcome to my portfolio</h1>
        <h5>I'm a passionate Developer</h5>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos culpa ullam eveniet! Perferendis distinctio asperiores quo nulla illo molestias quas eligendi iste dignissimos impedit ex repellendus, sint delectus fugiat magni.</p>
        <Button />
    </div>
  )
}

export default Hero