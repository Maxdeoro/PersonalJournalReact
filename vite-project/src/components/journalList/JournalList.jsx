import './JournalList.css';
import CardButton from '../cardButton/CardButton';
import JournalItem from '../journalItem/JournalItem';
import { useContext } from 'react';
import { UserContext } from '../../context/context.user';

function JournalList( {items} ) {
    const { userId } = useContext(UserContext);

    if(items.length === 0) {
        return <p>There is no posts yet, write a new post.</p>;
    }

    const sortItems = (a, b) => {
        if(a.date < b.date) {
            return 1;
        }
        return -1;
    };

    return (
        <>
            {items.filter(el => el.userId === userId).sort(sortItems).map(el => (
                <CardButton key={el.id}>
                    <JournalItem title={el.title} date={el.date} text={el.text}/>
                </CardButton>
            ))}
        </>
    );
};

export default JournalList;