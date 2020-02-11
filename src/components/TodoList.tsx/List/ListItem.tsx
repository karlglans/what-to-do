import React, { useState } from 'react';

import InputField from './InputField';

import './list-item.css';

interface Props {
  key: number;
  id: number;
  ischecked: boolean;
  handleCheck(msgId: number): void;
  removeNote(noteId: number): void;
  editNote(noteId: number, message: string): void;
  message: string;
  setNoteToFocus(noteId: number): void;
  isInFocus: boolean;
}

const ListItem: React.FC<Props> = ({ ischecked, id, message, handleCheck, removeNote, editNote, setNoteToFocus, isInFocus}) => {
  const [isShown, setIsShown] = useState(false);
  const style = {display: 'flex', justifyContent: 'space-around', alignItems: 'center'};
  function handleBlureInput() {
    setNoteToFocus(-1);
  }
  function handleDoubleClick() {
    setNoteToFocus(id);
  }
  
  return (
    <li style={style} className='todo-list-item' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <input type="checkbox"
        style={{flex: 1, marginLeft: 0}}
        name="done"
        checked={ischecked}
        onChange={() => handleCheck(id)}
        >
        </input>
        <span style={{flex: 10}} onDoubleClick={handleDoubleClick}>
          {isInFocus && (<InputField text={message} editNote={editNote} noteId={id} blureInput={handleBlureInput} />)}
          {!isInFocus && (<>{message}</>)}
        </span>
      
        {!isInFocus && (
          <button onClick={() => removeNote(id)} style={{flex: 0, visibility: !isShown ? 'hidden':'visible'}}>X</button>
        )}
    </li>
  );
}

export default ListItem;