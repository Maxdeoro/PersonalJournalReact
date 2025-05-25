import './JournalItem.css';

function JournalItem({title, text, date}) {

    return (
        <>
            <h1 className='journal-item__header'>{title}</h1>
            <h2 className='journal-item__body'>
                <div className='journal-item__date'>{date.toDateString()}</div>
                <div className='journal-item__text'>{text}</div>
            </h2>
        </>
    );
};

export default JournalItem;