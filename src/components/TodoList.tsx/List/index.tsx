import React, {useState, useEffect}  from 'react';
import { useLocation } from "react-router-dom";
import ListItem from './ListItem';
import Note from '../../../models/Note';

import './index.css';

const optEverything = 'optEverything';
const optChecked = 'optChecked';
const optUnchecked = 'optUnchecked';

interface Props {
  notes: Array<Note>;
  handleCheck(noteId: number): void;
  removeNote(noteId: number): void;
}

const TodoList: React.FC<Props> = ({ notes, handleCheck, removeNote}) => {
  const [selection, setSelection] = useState(optUnchecked)
  let location = useLocation();

  function doFiler(sel : string, {checked} : Note ) {
    if (sel === optChecked) return checked;
    if (sel === optUnchecked) return !checked;
    return true;
  }
  
  const listItems = notes
    .filter( (note:Note) => doFiler(selection, note))
    .map( (note:Note) => (
      <ListItem 
        key={note.id} 
        handleCheck={handleCheck}
        removeNote={removeNote}
        ischecked={note.checked} 
        id={note.id} >
        {note.message}
      </ListItem>
    ));

  useEffect(() => {
    if (location.pathname === '/active') setSelection(optUnchecked);
    else if (location.pathname === '/compleated') setSelection(optChecked);
    else setSelection(optEverything);
  }, [location]);

  return (
    <ul className='todo-list'>
      {listItems}
    </ul>
  );
}

export default TodoList;
