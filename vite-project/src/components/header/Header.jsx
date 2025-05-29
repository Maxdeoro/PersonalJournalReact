import './header.css';

function Header() {
    return (
        <div className="header">
            <img className='logo' src='/logo.svg' alt='Logo'/>
            <div className='logo-text'>My Personal Journal</div>
        </div>
    );
};

export default Header;