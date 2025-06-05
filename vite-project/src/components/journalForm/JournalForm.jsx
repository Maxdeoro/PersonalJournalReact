import './JournalForm.css';
import { useState } from 'react';
import Button from '../button/Button';

function JournalForm({onSubmit}) {

  const [formValidState, setFormValidState] = useState({
    title: true,
    date: true,
    text: true,
  });

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    // form validation
    let isFormValid = true;
    if(!formProps.title?.trim().length) {
      setFormValidState(state => ({...state, title: false}));
      isFormValid = false;
    } else {
      setFormValidState(state => ({...state, title: true}));
      // isFormValid = true;
    }
    if(!formProps.date) {
      setFormValidState(state => ({...state, date: false}));
      // isFormValid = false;
    } else {
      setFormValidState(state => ({...state, date: true}));
    }
    if(!formProps.text?.trim().length) {
      setFormValidState(state => ({...state, text: false}));
    } else {
      setFormValidState(state => ({...state, text: true}));
    }
    if(!isFormValid) return;

    onSubmit(formProps);
  };

    return ( 
        <form className='journal-form' onSubmit={addJournalItem}>
            <input type='title' name='title' placeholder='Title' 
                  className={`input ${formValidState.title ? '' : 'invalid'}`}/>
            <input type='date' name='date' 
                  className={`input ${formValidState.date ? '' : 'invalid'}`}/>
            <input type='text' name='tag' placeholder='Tag'/>
            <textarea name='text' rows='10' placeholder='Write here' 
                  className={`input ${formValidState.text ? '' : 'invalid'}`}></textarea>
            <Button text='Save'/>
        </form>    
    );
};

export default JournalForm;