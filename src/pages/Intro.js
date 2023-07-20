import React from 'react'

import styles from '../styles/intro.module.css'

import Fractal from '../components/fractal'

const Intro = () => {
  return (
    <div className={styles.container}>
        <Fractal />
        <p>A digital portal for decolonial dreaming</p>
        <button>Explore</button>
    </div>
  )
}

export default Intro