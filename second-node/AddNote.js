const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer);
    }catch(e){
        return [];
    }
}

const notes = loadNotes();

const addNotes = (title, body) =>{

    const updatedNotes = notes.filter(item => item.title!==title);
    //const duplicateNotes = notes.filter(item => item.title === title);
    // if(duplicateNotes.length === 0){
    // line13 to 18
    //}
    updatedNotes.push({
        title : title,
        body : body
    })
    saveNotes(updatedNotes);
    console.log(chalk.green.bold('Saving Successfull'))
}


const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const removeNote = (title) =>{
    var newNotes;
    var flag=0;
    notes.map(item =>{
        if(item.title===title){
            flag=1;
        }
    })
    if(flag===1){
        newNotes = notes.filter(item => item.title!==title);
        saveNotes(newNotes);
        console.log(chalk.green.bold('Note Removed'));
    }
    else{
        console.log(chalk.red.bold('Note Not found'));
    }
}

const listNote = () =>{
    const notes = loadNotes();
    console.log(notes.map(item => item.title));
    //forEach(item in)
}

const readNote = (title) => {
    const notes = loadNotes();
    // notes.map(item=>{
    //     if(item.title === title){
    //         console.log(chalk.green.inverse(item.body));
    //     }
    // })
    const foundNote = notes.find(item => item.title === title);

    if(foundNote){
        console.log(chalk.green.inverse(foundNote.body));
    }else{
        console.log(chalk.red.inverse(foundNote.body));
    }
}

module.exports = {
    add : addNotes,
    remove : removeNote,
    list : listNote,
    read : readNote
}