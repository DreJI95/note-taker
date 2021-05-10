const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

function createNewNote(body, notesArray) {
    const note = body;

    note.id = uniqid();

    notesArray.push(note);
    
    fs.writeFileSync(
        path.join(__dirname, '../Develop/db/db.json') ,
        JSON.stringify(notesArray, null, 2));

    return note;
  }

function showNotes(notesArray) {
  
  const note = fs.readFileSync(path.join(__dirname, '../Develop/db/db.json'),'utf8');
  return JSON.parse(note);
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