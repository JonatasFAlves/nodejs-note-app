console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');
console.log('');

// Mapping user input:
//   argv will have acess to full user input
//   command will be used to read user main command
// ------------------------------------------------------------------
// Mapeando input do usuário:
//   argv será uma constante com acesso ao input completo do usuário
//   command será usada para ler o comando principal do usuário
const argv = yargs.argv;
const command = argv._[0];

if(command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('The note was added.');
        notes.logNote(note);
    } else {
        console.log('The title of the note already exists.');
    }
} else if(command  === 'list') {
    const allNotes = notes.getAllNotes();
    console.log('Printing ', allNotes.length, 'note(s).')
    allNotes.forEach(note => notes.logNote(note));
} else if(command  === 'read') {
    const note = notes.getNote(argv.title);
    if(note){
        console.log('The note found was: ');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if(command  === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'The note was removed.':'Note not found.';
    console.log(message);
} else {
    console.log('Command not recognized');
}