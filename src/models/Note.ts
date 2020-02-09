export default class Note {
  message: string;
  id: number;
  checked: boolean;
  constructor(message: string, id: number, checked: boolean) {
      this.message = message;
      this.id = id;
      this.checked = checked;
  }
  setChecked(checked: boolean) {
    this.checked = checked;
  }
  isChecked() {
    return this.checked;
  }
  toggleChecked() {
    this.checked = !this.checked;
  }
  getMessage() {
    return this.message;
  }
  getId() {
    return this.id;
  }
}
let id:number = 0;

function _getId() {
  id += 1;
  return id;
}

export const makeNote = function(message: string) {
  return new Note(message, _getId(), false);
}
