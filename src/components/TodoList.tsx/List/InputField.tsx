import React, { useEffect } from 'react';

interface InputFiledProps {
  text: string;
  noteId: number;
  editNote(noteId: number, message: string): void;
  blureInput(): void;
}

const InputField: React.FC<InputFiledProps> = ({text, editNote, noteId, blureInput}) => {
  function handleChange(event: any) {
    editNote(noteId, event.target.value);
  }
  const textInput: any = React.createRef();
  function handleSubmit(event: any) { // TODO: replace any
    event.preventDefault();
    blureInput()
  }
  useEffect( ()=> {
    textInput.current.focus();
  },[textInput]);
  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={textInput}
        value={text}
        onChange={handleChange}
        onBlurCapture={blureInput}
        className='todo-list-item-input'/>
    </form>
  );
};

export default InputField;
