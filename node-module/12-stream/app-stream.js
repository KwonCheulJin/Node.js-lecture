const fs = require('fs')

const data = []
const readStream = fs.createReadStream('./file.txt', {
  // highWaterMark: 8, // default : 64kbytes
  // encoding: 'utf-8',
})
  .on('data', chunk => {
    // console.log(chunk);
    data.push(chunk)
    console.count('data')
  })
  .on('end', () => {
    console.log(data.join(''));
  })
  .on('error', error => {
    console.log(error)
  })