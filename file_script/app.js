// 계획
// 1. 사용자가 원하는 폴도의 이름을 받아온다
// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다
// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, IMG_1234(IMG_E1234)

const fs = require('fs')
const path = require('path')

const fileName = process.argv[2];
const workingDir = path.join(__dirname, 'Pictures', fileName)
if (!fileName || !fs.existsSync(workingDir)) {
  console.log('Please enter file name is Pictures');
  return
}

const videoDir = path.join(workingDir, 'video')
const capturedDir = path.join(workingDir, 'captured')
const duplicatedDir = path.join(workingDir, 'duplicated')

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir)
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir)
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir)

fs.promises.readdir(workingDir)
  .then(processFiles)
  .catch(console.log)



function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) move(file, videoDir);
    else if (isCapturedFile(file)) move(file, capturedDir);
    else if (isDuplicatedFile(files, file)) move(file, duplicatedDir);
  })
}


function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm
  const match = file.match(regExp)
  return !!match;
}

function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm
  const match = file.match(regExp)
  return !!match;
}

function isDuplicatedFile(files, file) {
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) return false
  const edited = `IMG_E${file.split('_')[1]}`
  const found = files.includes(edited)
  return found
}

function move(file, targetDir) {
  console.log(`move ${file} to ${path.basename(targetDir)}`);
  const oldPath = path.join(workingDir, file)
  const newPath = path.join(targetDir, file)
  fs.promises
    .rename(oldPath, newPath)
    .catch(console.error)
}


