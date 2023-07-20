import React from 'react'

import styles from '../styles/fractal.module.css'

const Fractal = () => {
  return (
    <div className={styles.container}>
        <div id={styles['circle-1']} className={styles['circle-container']}>
            <div className={styles.circle}></div>
        </div>
        <div id={styles['circle-2']} className={styles['circle-container']}>
            <div className={styles.circle}></div>
        </div>
        <div id={styles['circle-3']} className={styles['circle-container']}>
            <div className={styles.circle}></div>
        </div>
        <div id={styles['circle-4']} className={styles['circle-container']}>
            <div className={styles.circle}></div>
        </div>
    </div>
  )
}

export default Fractal