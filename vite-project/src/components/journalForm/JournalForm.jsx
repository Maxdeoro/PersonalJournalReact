import styles from './JournalForm.module.css';
import { useEffect, useReducer, useState } from 'react';
import Button from '../button/Button';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

function JournalForm({onSubmit}) {

  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const {isValid, isFormReadyToSubmit, values} = formState;

  useEffect(() => {
    let timerId;
    if(!isValid.title || !isValid.date || !isValid.text) {
      timerId = setTimeout(() => {
        dispatchForm({type: 'RESET_VALIDITY'});
      }, 3000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if(isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({type: 'CLEAR'});
    }
  }, [isFormReadyToSubmit]);

  const onChange = (e) => {
    dispatchForm({type: 'SET_VALUE',
                  payload: {[e.target.name]: e.target.value},
    });
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({type: 'SUBMIT'});
  };

    return ( 
        <form className={cn(styles['form', 'journalForm'])} onSubmit={addJournalItem}>
            <div>
              <input value={values.title} type='title' name='title' placeholder='Title'
                  onChange={onChange} 
                  className={cn(styles['input-title'], {
                    [styles['invalid']]: !isValid.title,
                 })}/>
            </div>
            <div className={cn(styles['form-row'])}>
              <label htmlFor='date' className={cn(styles['form-label'])}>
                <img src='/calendar.svg' alt='date-icon'></img>
                <span>Date</span>
              </label>
              <input value={values.data} type='date' id='date' name='date' 
                  onChange={onChange}
                  className={cn(styles['input'], {
                    [styles['invalid']]: !isValid.date,
                  })}/>
            </div>
            <div className={cn(styles['form-row'])}>
              <label htmlFor='tag' className={cn(styles['form-label'])}>
                <img src='/folder.svg' alt='tag-icon'></img>
                <span>Tag</span>
              </label>
              <input type='text' value={values.tag} id='tag' name='tag' placeholder='Tag' 
                  onChange={onChange} 
                  className={cn(styles['input'])
              }/>
            </div>
            <textarea name='text' value={values.text} rows='10' placeholder='Write here' 
                  onChange={onChange}
                  className={cn(styles['input'], {
                    [styles['invalid']]: !isValid.text,
                  })}></textarea>
            <Button text='Save'/>
        </form>    
    );
};

export default JournalForm;