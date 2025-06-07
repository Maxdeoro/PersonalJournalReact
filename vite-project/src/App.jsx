import './App.css';
import JournalItem from './components/journalItem/JournalItem';
import CardButton from './components/cardButton/CardButton';
import LeftPanel from '../layout/leftPanel/LeftPanel';
import Body from '../layout/body/Body';
import Header from './components/header/Header';
import JournalList from './components/journalList/JournalList';
import NewPostButton from './components/newPostButton/NewPostButton';
import JournalForm from './components/journalForm/JournalForm';
import { useEffect, useState } from 'react';

const INITIAL_DATA = [
    // {
    //   id: 1,
    //   title: 'Preparing to update courses',
    //   text: 'Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
    //   date: new Date(),
    // },
    // {
    //   id: 2,
    //   title: 'Hiking in the mountains',
    //   text: 'Lacinia integer nunc posuere ut hendrerit semper vel.',
    //   date: new Date(),
    // },
];

function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
  const data = JSON.parse(localStorage.getItem('data'));
  if(data) {
    setItems(data.map(item => ({
      ...item,
      date: new Date(item.date),
    })));
  }
}, []);

  const addItem = (item) => {
  setItems(oldItems => {
    const newId = oldItems.length === 0 ? 1 : Math.max(...oldItems.map(i => i.id)) + 1;
    return [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: newId,
    }];
  });
};

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <NewPostButton/>
        <JournalList items={items}/>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem}/>
      </Body>
    </div>
  )
}

export default App;
