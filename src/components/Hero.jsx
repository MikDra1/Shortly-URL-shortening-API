import Button from './Button'
import styles from './Hero.module.css'

function Hero() {
    return (
        <section className={styles.hero}>
            <img src="./images/illustration-working.svg" alt="" className={styles.heroIllustration} />
            <div className={styles.heroContent}>
            <h1>More than just shorter links</h1>
            <p>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
            <Button>Get Started</Button>
            </div>
        </section>
    )
}

export default Hero
