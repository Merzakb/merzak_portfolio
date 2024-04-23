import styles from './spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinner} aria-label='spinner-icon'>
      <div className={styles.circle}></div>
    </div>
  )
}

export default Spinner
