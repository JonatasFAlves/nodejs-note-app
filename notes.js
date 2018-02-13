console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    const note = {
        title, 
        body
    };
    
    try {
        const notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch(err) { }
    
    const duplicatedNotes = notes.filter(note => note.title === title);
    
    if(!duplicatedNotes.length) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

const getAllNotes = () => {
    console.log('Getting all notes');
};

const readNote = (title) => {
    console.log('Reading note: ', title);
};

const removeNote = (title) => {
    console.log('Removing note: ', title);
};


module.exports = {
    addNote,
    getAllNotes,
    readNote,
    removeNote
};