import './App.css';
import Button from './components/button/Button';
import JournalItem from './components/journalItem/JournalItem';

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

  return (
    <>
      <div>NEW PROJECT</div>
      <Button></Button>
      <JournalItem title={data[0].title} text={data[0].text} date={data[0].date}/>
      <JournalItem title={data[1].title} text={data[1].text} date={data[1].date}/>
    </>
  )
}

export default App;
