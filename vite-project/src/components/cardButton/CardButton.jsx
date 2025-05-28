import './CardButton.css';

function CardButton( {children, className} ) {
    const thisClass = 'card-button' + (className ? ' '+className : '');

    return (
        <button className={thisClass}>{children}</button>
    );
};

export default CardButton;