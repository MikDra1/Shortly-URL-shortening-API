import Button from './Button'
import styles from './Cta.module.css'

function Cta() {
    return (
        <section className={styles.cta}>
            <h2>Boost your links today</h2>
            <Button>Get Started</Button>
        </section>
    )
}

export default Cta
