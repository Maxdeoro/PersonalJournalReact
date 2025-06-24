import './CardButton.css';

function CardButton( {children, className, ...props} ) {
    const thisClass = 'card-button' + (className ? ' '+className : '');

    return (
        <button className={thisClass} {...props}>{children}</button>
    );
};

export default CardButton;