import styles from './Header.module.css';
import SelectUser from '../selectUser/SelectUser';
import Button from '../button/Button';
import { useState } from 'react';
import Logo from '../logo/Logo';

const logos = ['./logo.svg', './vite.svg'];
 
function Header() {

    const [logoIndex, setLogoIndex] = useState(0);

    const toggleLogo = () => {
        setLogoIndex(state => Number(!state));
    };

    return (
        <div className={styles.header}>
            <Logo image={logos[0]}/>
            {/* <Logo image={logos[logoIndex]}/> */}
            <div className={styles.logoText}>My Personal Journal</div>
            <SelectUser />
            <Button onClick={toggleLogo}>Change logo</Button>
        </div>
    );
};

export default Header;