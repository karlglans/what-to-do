import React from 'react';

import './list-item.css';

interface Props {
  key: number;
  id: number;
  ischecked: boolean;
  handleCheck(msgId: number): void;
  removeNote(noteId: number): void
  children: string;
}

const ListItem: React.FC<Props> = ({ ischecked, id, children, handleCheck, removeNote}) => {
  const style = {display: 'flex', justifyContent: 'space-around', alignItems: 'center'};
  return (
    <li style={style} className='todo-list-item'>
      <input type="checkbox"
        style={{flex: 1, marginLeft: 0}}
        name="done"
        checked={ischecked}
        onChange={() => handleCheck(id)}
        >
        </input>
      <span style={{flex: 10}}>{children}</span>
      <button onClick={() => removeNote(id)} style={{flex: 0}}>X</button>
    </li>
  );
}

export default ListItem;