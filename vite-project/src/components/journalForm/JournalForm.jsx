import './JournalForm.css';
import { useState } from 'react';
import Button from '../button/Button';

function JournalForm() {
      
  const [inputData, setInputData] = useState('');

  const inputChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue);
    setInputData(inputValue);
  };

  const addJournalItem = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    e.preventDefault();
    console.log(formProps);
  };

    return ( 
        <form className='journal-form' onSubmit={addJournalItem}>
            <input type='title' name='title' />
            <input type='text' name='date'/>
            <input type='text' name='tag' value={inputData} onChange={inputChange}/>
            <textarea name='post' rows='10'></textarea>
            <Button text='Save'/>
        </form>    
    );
};

export default JournalForm;