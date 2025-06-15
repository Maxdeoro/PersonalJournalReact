import './App.css';
import JournalItem from './components/journalItem/JournalItem';
import CardButton from './components/cardButton/CardButton';
import LeftPanel from '../layout/leftPanel/LeftPanel';
import Body from '../layout/body/Body';
import Header from './components/header/Header';
import JournalList from './components/journalList/JournalList';
import NewPostButton from './components/newPostButton/NewPostButton';
import JournalForm from './components/journalForm/JournalForm';
import { useLocalStorage } from './hooks/useLocalStorage.hook';
import { UserContext } from './context/context.user';

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

  const addItem = (item) => {
  setItems( [...mapItems(items), {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
    }]
  );
};

  return (
    <UserContext.Provider value={{userId: 1}}>
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
    </UserContext.Provider>
  )
}

export default App;
