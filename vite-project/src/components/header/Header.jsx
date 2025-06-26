import styles from './Header.module.css';
import SelectUser from '../selectUser/SelectUser';
import Logo from '../logo/Logo';

const logos = ['./logo.svg', './vite.svg'];
 
function Header() {

    return (
        <div className={styles.header}>
            <Logo image={logos[0]}/>
            <div className={styles.logoText}>My Personal Journal</div>
            <SelectUser />
        </div>
    );
};

export default Header;