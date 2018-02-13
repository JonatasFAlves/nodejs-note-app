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
        return note;
    }
};

const getAllNotes = () => {
    return fetchNotes();
};

const getNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0];
};

const removeNote = (title) => {
    const notes = fetchNotes();
    const updatedNotes = notes.filter(note => note.title !== title);
    if(!(notes.length === updatedNotes.length)) {
        saveNote(updatedNotes);
        return true;
    }
};

const logNote = (note) => {
    console.log('------------------');
    console.log('Title:', note.title);
    console.log('Body:', note.body);
};


module.exports = {
    addNote,
    getAllNotes,
    getNote,
    removeNote,
    logNote
};