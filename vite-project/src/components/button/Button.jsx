import styles from './Button.module.css';

function Button({text, onClick}) {

  return (
    <button onClick={onClick} className={`${styles.button} ${styles.accent}`}>{text}</button>
  )
}

export default Button;