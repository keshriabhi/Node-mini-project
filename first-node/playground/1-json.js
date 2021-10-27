  const fs = require('fs');

const book = {
    title : 'Ego is the Enemy',
    author : 'Ryan Holiday'
}

fs.writeFileSync('notes.json', JSON.stringify(book))