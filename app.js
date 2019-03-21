const chalk = require("chalk");

const yargs = require("yargs");

const notes = require("./notes");

//get the arguments for yargs

// Customize yargs version
yargs.version("1.2.0");

// Create add command
/**
 * TODO: check the command in yargs
 * ? Is it supported in latest version of yargs
 * ! alternate options are avialable
 */
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            alias: "t",
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        },
        body: {
            alias: "b",
            describe: "Body of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            alias: "t",
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: "list",
    describe: "List your notes",
    handler: function() {
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            alias: "t",
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title);
    }
});

//parse the yargs options above
yargs.parse();
