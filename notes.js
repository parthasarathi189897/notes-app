const chalk = require("chalk");
const fs = require("fs");
const getNotes = function() {};
const loadNotes = () => {
    try {
        let notesJson = fs.readFileSync("notes.json").toString();
        return JSON.parse(notesJson);
    } catch (err) {
        return [];
    }
};
const saveNotes = notes => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
};
const addNote = (title, body) => {
    let notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);
    if (duplicateNotes.length !== 0) {
        console.log(chalk.red("Its a duplicate note !!"));
    } else {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green("Note saved successfully !!"));
    }
};

const removeNote = title => {
    let notes = loadNotes();
    const newNoteList = notes.filter(note => note.title !== title);
    saveNotes(newNoteList);
    if (notes > newNoteList) {
        console.log(
            chalk.green.inverse(
                `Note with title: ${title} removed successfully !!`
            )
        );
    } else {
        console.log(
            chalk.red.inverse(`Note with title: ${title} not found !!`)
        );
    }
};

const listNotes = () => {
    let notes = loadNotes();
    console.log(chalk.green("Your Notes:"));
    notes.forEach(note => {
        console.log(chalk.green("\nNote: >>>>>>>>>>"));
        console.log(chalk.yellow(`Title: ${note.title}`));
        console.log(chalk.yellow(`Body: ${note.body}`));
    });
};

const readNote = title => {
    let notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(chalk.green("\nNote: >>>>>>>>>>"));
        console.log(chalk.yellow(`Title: ${note.title}`));
        console.log(chalk.yellow(`Body: ${note.body}`));
    } else {
        console.log(chalk.red.inverse("Note not found!!"));
    }
};

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};
