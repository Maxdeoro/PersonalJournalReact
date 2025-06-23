import './JournalList.css';
import CardButton from '../cardButton/CardButton';
import JournalItem from '../journalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/context.user';

function JournalList( {items} ) {
    const { userId } = useContext(UserContext);

    const sortItems = (a, b) => {
        if(a.date < b.date) {
            return 1;
        }
        return -1;
    };

    const filteredItems = useMemo(() => items.filter(el => el.userId === userId)
                                             .sort(sortItems), [items, userId]);

    if(items.length === 0) {
        return <p>There is no posts yet, write a new post.</p>;
    }

    return (
        <>
            {filteredItems.map(el => (
                <CardButton key={el.id}>
                    <JournalItem title={el.title} date={el.date} text={el.text}/>
                </CardButton>
            ))}
        </>
    );
};

export default JournalList;