import React, { useState, useEffect } from 'react'

import styles from '../styles/intro.module.css'

import Fractal from '../components/fractal'

const Intro = () => {

    const introText = [
        "Welcome to the Alternet",
        "This is a digital portal for decolonial dreaming",
        "A curated repository of spaces that can strengthen our relationship with self and community",
        "Begin by taking a moment to breathe and become aware of the space you are in",
        "Ask yourself: what do I want to see in the world outside of myself today?",
        "Hold that thought in your mind as you engage with the alternet",
        "Feel free to dive in when you're ready"
    ]

    const [ index, setIndex ] = useState(0)
    const [ showButton, setShowButton ] = useState(false)
    const [ isFinalText, setIsFinalText ] = useState(false)

    useEffect(() => {
        const introTextLength = introText.length

        const interval = setInterval(() => {
          if (index < introTextLength - 1) {
            setIndex(index+1);

            if(index === introTextLength - 2){
                setIsFinalText(true)
                setShowButton(true)
            }
          }
        }, 7000);
    
        return () => clearInterval(interval);
    }, [index, introText.length]);

    return (
        <div className={styles.container}>
            <Fractal />
            {/* Typing animation dreams <div className={styles.typewriter}>
                <p>{introText[index]}</p>
            </div> */}
            <p className={isFinalText ? styles['final-text'] : styles.text}>
                {introText[index]}
            </p>
            {showButton && <button className={styles.button}>Explore</button> }
        </div>
  )
}

export default Intro