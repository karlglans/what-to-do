import React, {useState} from 'react';

import './Input.css';

interface Props {
  addNote(message: string): void;
}

const Input: React.FC<Props> = ({ addNote }) => {
  const [inputText, setInputText] = useState('');
  function _handleKeyDown(event: any) {
    event.preventDefault();
    if (inputText.length > 0) {
      addNote(inputText);
      setInputText('');
    }
  }
  return (
    <form onSubmit={_handleKeyDown}>
      <input 
        className='todo-input'
        placeholder='What needs to be done?'
        onChange={(event) => setInputText(event.target.value)} 
        style={{width: '100%'}} value={inputText} />
    </form>
  );
}

export default Input;
