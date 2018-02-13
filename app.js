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

console.log(argv);

if(command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(command  === 'list') {
    notes.getAll();
} else if(command  === 'read') {
    notes.readNote(argv.title);
} else if(command  === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}