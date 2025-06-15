import styles from './Header.module.css';
import SelectUser from '../selectUser/SelectUser';
 
function Header({changedUser}) {
    const changeUser = (e) => {
        changedUser(e.target.value);
        console.log(e.target.value);
    };
    return (
        <div className={styles.header}>
            <img className={styles.logo} src='/logo.svg' alt='Logo'/>
            <div className={styles.logoText}>My Personal Journal</div>
            <SelectUser changeUser={changeUser}/>
        </div>
    );
};

export default Header;