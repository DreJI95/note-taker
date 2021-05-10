const router = require('express').Router();
const path = require('path');
const { createNewNote, validateNote, showNotes } = require('../lib/notes');
const notesDb = require('../Develop/db/db.json');

router.delete('/api/notes/:id', (req, res) => {

  console.log(req.query);
  // if (req.body)
  // {
  //   console.log(removeNote(res));
  // }

});

router.get('/api/notes', (req, res) => {
    let results = notesDb;

    results = showNotes();
    res.json(results);
    return (results);

  });

router.post('/api/notes', (req, res) => {
    //req.body.id = notesDb.length.toString(); //place unique id here
    
    if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
    } else {
    const note = createNewNote(req.body, notesDb);
    res.json(note);
    }
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
  });

module.exports  = router;