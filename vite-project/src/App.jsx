import './App.css';
import LeftPanel from '../layout/leftPanel/LeftPanel';
import Body from '../layout/body/Body';
import Header from './components/header/Header';
import JournalList from './components/journalList/JournalList';
import NewPostButton from './components/newPostButton/NewPostButton';
import JournalForm from './components/journalForm/JournalForm';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContextProvider } from './context/context.user';
import { useState } from 'react';

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
  const [selectedItem, setSelectedItem] = useState({});

  const addItem = (item) => {
    if (!item.id) {
      const mappedItems = mapItems(items);
      setItems([...mappedItems, {
        ...item,
        date: new Date(item.date),
        id: mappedItems.length > 0 ? Math.max(...mappedItems.map(i => i.id)) + 1 : 1,
      }]);
    } else {
      const mappedItems = mapItems(items);
      setItems([...mappedItems.map(i => {
        if (i.id === item.id) {
          return {
            ...item,
          };
        }
        return i;
      })]);
    }
  };

  return (
    <UserContextProvider>
      <div className='app'>
        <LeftPanel>
          <Header/>
          <NewPostButton/>
          <JournalList items={mapItems(items)} setItem={setSelectedItem}/>
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem} data={selectedItem}/>
        </Body>
      </div>
    </UserContextProvider>
  )
}

export default App;
