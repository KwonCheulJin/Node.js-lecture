const fs = require('fs')

// api는 3가지 형태로 제공
// rename, rename(..., callback(error, data)) 비동기방식
// try{renameSync(...)} catch(e){} 끝날때까지 다음줄로 넘어가지 않음
// promises.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt')
} catch (error) {
  console.error(error)
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
})

console.log('hello');

fs.promises.rename('./text2.txt', 'text-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error)