const csv = require('csv-parser')
const fs = require('fs')
const students = [
  {
    "Fname": 'x',
    "Lname": 'y',
    "MZRname": 'mother of x',
    "FZRname": 'father of x',
    "SCOlemail": 'x.y@schooldia.com'
  },
];
// write
const file = fs.createWriteStream('file.csv');
file.write(`first name , last name , father name , mother name , schooldia email\n`)
students.forEach(student => {
  file.write(`${student.Fname} , ${student.Lname} , ${student.FZRname} , ${student.MZRname} , ${student.SCOlemail}`);

});
// read
fs.createReadStream('file.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });