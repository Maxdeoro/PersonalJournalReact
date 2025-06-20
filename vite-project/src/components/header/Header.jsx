import styles from './Header.module.css';
import SelectUser from '../selectUser/SelectUser';
import Button from '../button/Button';
import {useState } from 'react';

const logos = ['./logo.svg', './vite.svg'];
 
function Header() {

    const [logoIndex, setLogoIndex] = useState(0);

    const toggleLogo = () => {
        setLogoIndex(state => Number(!state));
    };

    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logos[logoIndex]} alt='Logo'/>
            <div className={styles.logoText}>My Personal Journal</div>
            <SelectUser />
            <Button onClick={toggleLogo}>Change logo</Button>
        </div>
    );
};

export default Header;