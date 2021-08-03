import express from 'express'
import fs from 'fs'
import fsAsync from 'fs/promises'
import 'express-async-errors'

const app = express()

// all은 지정한 경로에 한해서만 수행한다
// 다른 경로에서도 수행하게 하려면 'api/*'로 지정해줘야한다
// app.all('/api', (req, res, next) => {
//   console.log('all');
//   next()
// })

// use는 지정한 경로 뒤에 다른 경로도 use는 수행한다
// app.use('/sky', (req, res, next) => {
//   console.log('use');
//   next()
// })
// app.get(
//   '/',
//   (req, res, next) => {
//     console.log('first');
//     // next()
//     // next('route')
//     res.send('Hello')
//   },
//   (req, res, next) => {
//     console.log('first2');
//   }
// )

// app.get('/', (req, res, next) => {
//   console.log('second');
// })

// app.use((req, res, next) => {
//   res.status(400).send('Not available! @_@')
// })

// app.use((error, req, res, next) => {
//   console.error(error);
//   res.status(500).send('Sorry, try later!')
// })

// app.post('/', (req, res, next) => {
//   console.log(req.body);
// })

app.use(express.json())

app.get('/file', (req, res) => {
  fs.readFile('/file1.txt', (err, data) => {
    if (err) res.sendStatus(404)
  })
})

app.get('/file1', (req, res) => {
  try {
    const data = fs.readFileSync('/file1.txt')
    res.send(data)
  } catch (error) {
    res.sendStatus(404)
  }
})

app.get('/file2', async (req, res) => {
  return fsAsync
    .readFile('/file2.txt')
    .then((data) => res.send(data))

})

app.get('/file3', async (req, res) => {

  const data = await fsAsync.readFile('/file3.txt')
  res.send(data)

})

app.use((error, req, res, next) => {
  console.error(error)
  res.status(500).json({ message: 'Something went wrong' })
})

app.listen(8000)