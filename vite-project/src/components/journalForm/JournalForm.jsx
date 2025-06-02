import './JournalForm.css';
import { useState } from 'react';
import Button from '../button/Button';

function JournalForm({onSubmit}) {

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

    return ( 
        <form className='journal-form' onSubmit={addJournalItem}>
            <input type='title' name='title' placeholder='Title'/>
            <input type='date' name='date'/>
            <input type='text' name='tag' placeholder='Tag'/>
            <textarea name='text' rows='10' placeholder='Write here'></textarea>
            <Button text='Save'/>
        </form>    
    );
};

export default JournalForm;