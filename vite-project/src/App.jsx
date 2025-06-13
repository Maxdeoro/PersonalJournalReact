import './App.css';
import JournalItem from './components/journalItem/JournalItem';
import CardButton from './components/cardButton/CardButton';
import LeftPanel from '../layout/leftPanel/LeftPanel';
import Body from '../layout/body/Body';
import Header from './components/header/Header';
import JournalList from './components/journalList/JournalList';
import NewPostButton from './components/newPostButton/NewPostButton';
import JournalForm from './components/journalForm/JournalForm';
// import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage.hook';

// const INITIAL_DATA = [
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
// ];
function mapItems(items) {
  if(!items) {
    return [];
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date),
  }));
};

function App() {

  const [items, setItems] = useLocalStorage('data');

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('data'));
  //   if(data) {
  //     setItems(data.map(item => ({
  //       ...item,
  //       date: new Date(item.date),
  //     })));
  //   }
  // }, []);

  // useEffect(() => {
  //   if(items.length) {
  //     localStorage.setItem('data', JSON.stringify(items));
  //   }
  //   console.log(items);
  // }, [items]);

  const addItem = (item) => {
  setItems( [...mapItems(items), {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
    }]
  );
};

//   const addItem = (item) => {
//   setItems(oldItems => {
//     const newId = oldItems.length === 0 ? 1 : Math.max(...oldItems.map(i => i.id)) + 1;
//     return [...oldItems, {
//       text: item.text,
//       title: item.title,
//       date: new Date(item.date),
//       id: newId,
//     }];
//   });
// };

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <NewPostButton/>
        <JournalList items={mapItems(items)}/>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem}/>
      </Body>
    </div>
  )
}

export default App;
