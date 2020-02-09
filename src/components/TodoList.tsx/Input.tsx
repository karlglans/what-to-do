import React, {useState} from 'react';

import './Input.css';

interface Props {
  addNote(message: string): void;
}

const Input: React.FC<Props> = ({ addNote }) => {
  const [inputText, setInputText] = useState("input text");

  function _handleKeyDown(e: any) {
    if (e.key === 'Enter') {
      setInputText('');
      addNote(e.target.value);
    }
  }

  return (
    <input 
      className='todo-input'
      placeholder='What needs to be done?'
      onKeyDown={_handleKeyDown}
      onChange={(event) => setInputText(event.target.value)} 
      style={{width: '100%'}} value={inputText} />
  );
}

export default Input;
