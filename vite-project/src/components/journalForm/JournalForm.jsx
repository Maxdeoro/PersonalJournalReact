import styles from './JournalForm.module.css';
import { useContext, useEffect, useReducer, useRef } from 'react';
import Button from '../button/Button';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../input/Input';
import { UserContext } from '../../context/context.user';

function JournalForm({onSubmit, data, onDelete}) {

  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const {isValid, isFormReadyToSubmit, values} = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();
  const { userId } = useContext(UserContext);

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    if (!data) {
      dispatchForm({type: 'CLEAR'});
      dispatchForm({type: 'SET_VALUE', payload: {userId}});
    }
    dispatchForm({type: 'SET_VALUE', payload: {...data}});
  }, [data]);

  useEffect(() => {
    let timerId;
    if(!isValid.title || !isValid.date || !isValid.text) {
      focusError(isValid);
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
      dispatchForm({type: 'SET_VALUE', payload: {userId}});
    }
  }, [isFormReadyToSubmit, values, onSubmit, userId]);

  useEffect(() => {
    dispatchForm({type: 'SET_VALUE', payload: {userId: userId}});
  }, [userId]);

  const onChange = (e) => {
    dispatchForm({type: 'SET_VALUE',
                  payload: {[e.target.name]: e.target.value},
    });
  };

  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({type: 'SUBMIT'});
  };

  const deleteJournalItem = () => {
    onDelete(data.id);
    dispatchForm({type: 'CLEAR'});
    dispatchForm({type: 'SET_VALUE', payload: {userId}});
  };

    return ( 
      <form className={cn(styles['form', 'journalForm'])} onSubmit={addJournalItem}>
            <div className={cn(styles['form-row'])}>
              <Input value={values.title} ref={titleRef} type='title' name='title'
                  isValid={isValid.title}
                  appearance='title' 
                  placeholder='Title'
                  onChange={onChange} 
              />
              {data?.id && <button className={styles['delete']} type='button' 
                          onClick={deleteJournalItem}>
                <img src='/archive.svg' alt='delete'></img>
              </button>}
            </div>
            <div className={cn(styles['form-row'])}>
              <label htmlFor='date' className={cn(styles['form-label'])}>
                <img src='/calendar.svg' alt='date-icon'></img>
                <span>Date</span>
              </label>
              <Input value={values.data} ref={dateRef} type='date' id='date' name='date' 
                  isValid={isValid.date} 
                  onChange={onChange}
              />
            </div>
            <div className={cn(styles['form-row'])}>
              <label htmlFor='tag' className={cn(styles['form-label'])}>
                <img src='/folder.svg' alt='tag-icon'></img>
                <span>Tag</span>
              </label>
              <Input type='text' value={values.tag} id='tag' name='tag' placeholder='Tag' 
                  onChange={onChange} 
                  className={cn(styles['input'])}
              />
            </div>
            <textarea name='text' value={values.text} rows='10' ref={textRef} 
                  placeholder='Write here' 
                  onChange={onChange}
                  className={cn(styles['input'], {
                    [styles['invalid']]: !isValid.text,
                  })}></textarea>
            <Button>Save</Button>
        </form> 
    );
};

export default JournalForm;