import './Button.css';
import { useState } from 'react';

function Button(children) {
  // let text = 'SAVE';
  const [text, setText] = useState('Save');
  const pushTheButton = () => {
    setText('Close');
    console.log('Button pushed');
  };

  return (
    <button className='button accent' onClick={pushTheButton}>{text}</button>
  )
}

export default Button;