console.log('Starting notes.js');


const addNote = (title, body) => {
    console.log('Adding note...', title, body);
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