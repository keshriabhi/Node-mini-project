const { argv } = require('process');
const yargs = require('yargs');
const addNote = require('./AddNote');

yargs.version('1.0.0');

yargs.command({
    command : 'add',
    describe : 'Add a note',
    builder : {
        title : {
            describe : 'Notes Title',
            demandOption : true,
            type : 'String'
        },
        body : {
            describe : 'Notes arg1',
            demandOption : true,
            type : 'String'
        }
    },
    handler : (argv) =>{ 
        // console.log("Notes Information --\n"+argv.body);
        // console.log(argv.title);
        addNote.add(argv.title, argv.body);
    }
})

yargs.command({
    command : 'remove',
    describe : 'Remove something from note',
    builder : {
        title : {
            describe : 'Remove title',
            demandOption : true,
            type : 'String'
        }
    },
    handler : (argv)=>{
        //console.log('Removed an item -> '+argv.title);
        addNote.remove(argv.title);
    }
})

yargs.command({
    command : 'list',
    describe : 'List the note',
    handler : ()=>{
        //console.log('Removed an item -> '+argv.title);
        addNote.list();
    }
})

yargs.command({
    command : 'read',
    describe : 'read from note',
    builder : {
        title : {
            describe : 'read title',
            demandOption : true,
            type : 'String'
        }
    },
    handler : (argv)=>{
        //console.log('Removed an item -> '+argv.title);
        addNote.read(argv.title);
    }
})

yargs.parse();