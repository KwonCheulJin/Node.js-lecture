import express from 'express'
import 'express-async-errors'

let tweets = [
  {
    id: "1",
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: "2",
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: Date.now().toString(),
    name: 'Charles',
    username: 'charles',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
];

const router = express.Router()

// GET /tweets
// GET /tweets?user_name=:user_name

router.get('/', (req, res, next) => {
  const user_name = req.query.user_name
  const data = user_name
    ? tweets.filter(tweet => tweet.username === user_name)
    : tweets
  res.status(200).json(data)
})



// GET /tweets/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  const tweet = tweets.find(tweet => tweet.id === id)
  if (tweet) res.status(200).json(tweet)
  else res.status(400).json({ message: `Tweet id(${id}) not found` })
})

// POST /tweets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  }
  tweets = [tweet, ...tweets]
  res.status(200).json(tweet)
})

// PUT /tweets/:id
router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const text = req.body.text
  const tweet = tweets.find(tweet => tweet.id === id)
  if (tweet) {
    tweet.text = text
    res.status(200).json(tweet)
  } else {
    res.status(400).json({ message: `Tweet id(${id}) not found` })
  }
})

// DELETE /tweets/:id
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  tweets = tweets.filter(tweet => tweet.id !== id)
  res.sendStatus(204)
})
export default router