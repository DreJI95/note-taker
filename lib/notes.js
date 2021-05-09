const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json') ,
        JSON.stringify({ note: notesArray }, null, 2));

    return note;
  }

function showNotes(notesArray) {
  console.log(notesArray);
}

function validateNote(note) {
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  return true;
}

  module.exports = {
    createNewNote,
    validateNote,
    showNotes
  };