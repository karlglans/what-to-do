import React, {useState, useEffect} from 'react';

import Note from '../../../models/Note';

import Naviagation from './Navigation';
import './index.css';

interface Props {
  notes: Array<Note>;
  clearCompleated(): void;
}

const Footer: React.FC<Props> = ({notes, clearCompleated}) => {
  const [tasksLeft, setTasksLeft] = useState(0);

  useEffect(() => {
    setTasksLeft(notes.length - notes.filter(x => x.checked).length);
  }, [notes]);

  return (
    <div style={{display: 'flex', flexDirection: 'row'}} className='footer' >
      <span style={{ flex: 1}}>
        {tasksLeft} items left
      </span>
      <span style={{ flex: 1, textAlign: 'center'}}>
      <Naviagation />
      </span>
      <span style={{ flex: 1, textAlign: 'right'}}>
        <button onClick={clearCompleated}>Clear completed</button>
      </span>
    </div>
  );
}

export default Footer;
