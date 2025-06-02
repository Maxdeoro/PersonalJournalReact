import './App.css';
import JournalItem from './components/journalItem/JournalItem';
import CardButton from './components/cardButton/CardButton';
import LeftPanel from '../layout/leftPanel/LeftPanel';
import Body from '../layout/body/Body';
import Header from './components/header/Header';
import JournalList from './components/journalList/JournalList';
import NewPostButton from './components/newPostButton/NewPostButton';
import JournalForm from './components/journalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
    {
      id: 1,
      title: 'Preparing to update courses',
      text: 'Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Hiking in the mountains',
      text: 'Lacinia integer nunc posuere ut hendrerit semper vel.',
      date: new Date(),
    },
];

function App() {

  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: Math.max(...oldItems.map(item => item.id)) + 1,   // find max id and add 1 to create new id
    }]);
  };

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <NewPostButton/>
        <JournalList>
          {items.sort(sortItems).map(el => (
            <CardButton key={el.id}>
              <JournalItem title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem}/>
      </Body>
    </div>
  )
}

export default App;
