import styles from './Header.module.css';
import SelectUser from '../selectUser/SelectUser';
 
function Header() {

    return (
        <div className={styles.header}>
            <img className={styles.logo} src='/logo.svg' alt='Logo'/>
            <div className={styles.logoText}>My Personal Journal</div>
            <SelectUser />
        </div>
    );
};

export default Header;