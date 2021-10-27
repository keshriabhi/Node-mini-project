const fs = require('fs');

const book = {
    title : 'Power of habits',
    author : 'Charles Duhiggs'
}

fs.writeFileSync('book.json',JSON.stringify(book));
const data = fs.readFileSync('book.json');
const dataString = data.toString();
console.log(dataString)
console.log(JSON.parse(data));

const person = {
    name : 'Abhishek',
    place : 'Bangalore'
}
person.name = "Abhi";

fs.writeFileSync('person.json',JSON.stringify(person));

const personFile = fs.readFileSync('person.json');
console.log(JSON.parse(personFile))