const yargs = require('yargs');
// console.log(yargs.argv);
console.log(yargs.argv['title']);
// console.log(yargs.argv['body']);
// yargs.version('1.0.0');

yargs.command({
    command : 'add',
    describe : 'Adding a new Note',
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Notes Body',
            demandOption : true,
            type : 'string'
        }
    },
    handler : (argv) => {
        //console.log('Hey! I am adding a new note to your note app! Happy?');
        console.log('Title : '+argv.title);
        console.log('Title : '+argv.body);
    }
});
yargs.command({
    command : 'list',
    describe : 'Listing all the Notes',
    handler : () => {
        console.log('So You want to list all the notes? Okay! Here you go!');
    }
});
yargs.command({
    command : 'read',
    describe : 'Reading all the Notes',
    handler : () => {
        console.log('Let\'s read All your notes and show you what do you have. Alright!');
    }
});
yargs.parse();