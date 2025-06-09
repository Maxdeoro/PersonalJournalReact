import styles from './JournalForm.module.css';
import { useEffect, useReducer, useState } from 'react';
import Button from '../button/Button';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

// const INITIAL_STATE = {
//   title: true,
//   date: true,
//   text: true,
// };

function JournalForm({onSubmit}) {

  // const [formValidState, setFormValidState] = useState({
  //   title: true,
  //   date: true,
  //   text: true,
  // });
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const {isValid, isFormReadyToSubmit, values} = formState;

  useEffect(() => {
    let timerId;
    if(!isValid.title || !isValid.date || !isValid.text) {
      timerId = setTimeout(() => {
        dispatchForm({type: 'RESET_VALIDITY'});
        // setFormValidState(INITIAL_STATE);
      }, 3000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if(isFormReadyToSubmit) {
      onSubmit(values);
    }
  }, [isFormReadyToSubmit]);

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    dispatchForm({type: 'SUBMIT', payload: formProps});

    // form validation
    // let isFormValid = true;
    // if(!formProps.title?.trim().length) {
    //   setFormValidState(state => ({...state, title: false}));
    //   isFormValid = false;
    // } else {
    //   setFormValidState(state => ({...state, title: true}));
    // }
    // if(!formProps.date) {
    //   setFormValidState(state => ({...state, date: false}));
    // } else {
    //   setFormValidState(state => ({...state, date: true}));
    // }
    // if(!formProps.text?.trim().length) {
    //   setFormValidState(state => ({...state, text: false}));
    // } else {
    //   setFormValidState(state => ({...state, text: true}));
    // }
    // if(!isFormValid) return;

    onSubmit(formProps);
  };

    return ( 
        <form className={cn(styles['form', 'journalForm'])} onSubmit={addJournalItem}>
            <div>
              <input type='title' name='title' placeholder='Title' 
                  className={cn(styles['input-title'], {
                    [styles['invalid']]: !isValid.title,
                 })}/>
            </div>
            <div className={cn(styles['form-row'])}>
              <label for='date' className={cn(styles['form-label'])}>
                <img src='/calendar.svg' alt='date-icon'></img>
                <span>Date</span>
              </label>
              <input type='date' id='date' name='date' 
                  className={cn(styles['input'], {
                    [styles['invalid']]: !isValid.date,
                  })}/>
            </div>
            <div className={cn(styles['form-row'])}>
              <label for='tag' className={cn(styles['form-label'])}>
                <img src='/folder.svg' alt='tag-icon'></img>
                <span>Tag</span>
              </label>
              <input type='text' id='tag' name='tag' placeholder='Tag' className={
                cn(styles['input'])
              }/>
            </div>
            <textarea name='text' rows='10' placeholder='Write here' 
                  className={cn(styles['input'], {
                    [styles['invalid']]: !isValid.text,
                  })}></textarea>
            <Button text='Save'/>
        </form>    
    );
};

export default JournalForm;