const notesDB = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

  // GET Request to retrieve notes
  router.get('/notes', (req, res) => {
    res.json(notesDB);
  });

  // POST Request to save a new note
  router.post('/notes', (req, res) => {
    req.body.id = uuidv4();
    notesDB.push(req.body);
    fs.writeFileSync('db/db.json', JSON.stringify(notesDB));
    res.json(req.body);
  });

  // DELETE Request to delete a note by ID
  router.delete('/notes/:id', (req, res) => {
    const pos = notesDB.findIndex(elem => elem.id === req.params.id)
    notesDB.splice(pos, 1)
    fs.writeFileSync('db/db.json', JSON.stringify(notesDB));
    res.json({ message: 'Note deleted' });
  });
  
module.exports = router;