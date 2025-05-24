import './JournalItem.css';

function JournalItem() {
    const title = 'Preparing to update courses';
    const date = new Date();
    const text = 'Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.';

    return (
        <div className='journal-item'>
            <h1 className='journal-item__header'>{title}</h1>
            <h2 className='journal-item__body'>
                <div className='journal-item__date'>{date.toDateString()}</div>
                <div className='journal-item__text'>{text}</div>
            </h2>
        </div>
    );
};

export default JournalItem;