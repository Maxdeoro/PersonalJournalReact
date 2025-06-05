import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src='/logo.svg' alt='Logo'/>
            <div className={styles.logoText}>My Personal Journal</div>
        </div>
    );
};

export default Header;