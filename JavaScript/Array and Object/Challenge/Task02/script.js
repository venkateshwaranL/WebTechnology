library = [
  {
    title: "Core Java",
    author: "Punith Sir",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "Frontend",
    author: "Sandesh Sir",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "Python",
    author: "Kshitij Sir",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
library[0].status.reading = true;
library[0].status.read = true;
library[1].status.reading = true;
library[1].status.read = true;
library[2].status.reading = true;
library[2].status.read = true;

console.log(library);

//Destructure title and rename it to firstBook
//      oldname : newName
const { title: firstBook } = library[0];

const book_name = firstBook;
console.log(book_name);

const json_value = JSON.stringify(library);

console.log(json_value);
