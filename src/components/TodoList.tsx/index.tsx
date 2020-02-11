import React, {useState} from 'react';
import {makeNote} from '../../models/Note';
import List from './List';
import Input from './Input';
import Footer from './Footer';
import './index.css';

const TodoList = () => {
  const [notes, setNotes] = useState([ makeNote('message 1'), makeNote('message 2')] );

  function handleCheck(noteId: number) {
    const msgIdx = notes.findIndex(msg => msg.id === noteId);
    if (msgIdx !== -1) {
      notes[msgIdx].toggleChecked();
      const newList = [...notes];
      setNotes(newList);
    }
  }

  function addNote(message: string) {
    if (message && message.length > 1) {
      setNotes([...notes, makeNote(message)]);
    }
  }

  function removeNote(noteId: number) {
    setNotes(notes.filter(note => note.id !== noteId));
  }

  function editNote(noteId: number, message: string) {
    const noteIdx = notes.findIndex(msg => msg.id === noteId);
    if (noteIdx !== -1) {
      notes[noteIdx].message = message;
      setNotes([...notes]);
    }
  }

  function clearCompleated() {
    const uncompleated = notes.filter(note => !note.checked);
    setNotes(uncompleated);
  }

  return (
    <div className='todo-list'>
      <Input addNote={addNote} />
      <List handleCheck={handleCheck} removeNote={removeNote} editNote={editNote} notes={notes} />
      <Footer notes={notes} clearCompleated={clearCompleated}/>
    </div>
  );
}

export default TodoList;
