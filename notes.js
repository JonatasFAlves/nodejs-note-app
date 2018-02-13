console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(err) {
        return [];
    }
}

const saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title, 
        body
    };
    
    const duplicatedNotes = notes.filter(note => note.title === title);
    
    if(!duplicatedNotes.length) {
        notes.push(note);
        saveNote(notes);
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