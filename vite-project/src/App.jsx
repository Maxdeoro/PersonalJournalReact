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
  const [selectedItem, setSelectedItem] = useState(null);

  const mappedItems = mapItems(items);

  const addItem = (item) => {
    if (!item.id) {
      setItems([...mappedItems, {
        ...item,
        date: new Date(item.date),
        id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
      }]);
    } else {
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

  const deleteItem = (id) => {
    setItems([...items.filter(i => i.id !== id)]);
  };

  return (
    <UserContextProvider>
      <div className='app'>
        <LeftPanel>
          <Header/>
          <NewPostButton clearForm={() => setSelectedItem(null)}/>
          <JournalList items={mapItems(items)} setItem={setSelectedItem}/>
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem} data={selectedItem} onDelete={deleteItem}/>
        </Body>
      </div>
    </UserContextProvider>
  )
}

export default App;
