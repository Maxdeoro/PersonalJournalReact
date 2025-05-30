import './App.css';
import JournalItem from './components/journalItem/JournalItem';
import CardButton from './components/cardButton/CardButton';
import LeftPanel from '../layout/leftPanel/LeftPanel';
import Body from '../layout/body/Body';
import Header from './components/header/Header';
import JournalList from './components/journalList/JournalList';
import NewPostButton from './components/newPostButton/NewPostButton';

function App() {
  const data = [
    {
      title: 'Preparing to update courses',
      text: 'Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
      date: new Date(),
    },
    {
      title: 'Hiking in the mountains',
      text: 'Lacinia integer nunc posuere ut hendrerit semper vel.',
      date: new Date(),
    },
  ];

  const inputChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
  };

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <NewPostButton/>
        <JournalList>
          <CardButton>
            <JournalItem title={data[0].title} text={data[0].text} date={data[0].date}/>
          </CardButton>
          <CardButton>
            <JournalItem title={data[1].title} text={data[1].text} date={data[1].date}/>
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <input type='text' onChange={inputChange}/>
      </Body>
    </div>
  )
}

export default App;
