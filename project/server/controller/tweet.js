import * as tweetRepository from '../data/tweet.js'

export async function getTweets(req, res) {
  const user_name = req.query.user_name
  const data = await (user_name
    ? tweetRepository.getAllByUsername(user_name)
    : tweetRepository.getAll())
  res.status(200).json(data)
}

export async function getTweet(req, res, next) {
  const id = req.params.id
  const tweet = await tweetRepository.getById(id)
  if (tweet) res.status(200).json(tweet)
  else res.status(400).json({ message: `Tweet id(${id}) not found` })
}

export async function createTweet(req, res, next) {
  const { text, name, username } = req.body
  const tweet = await tweetRepository.create(text, name, username)
  res.status(200).json(tweet)
}

export async function updateTweet(req, res, next) {
  const id = req.params.id
  const text = req.body.text
  const tweet = await tweetRepository.update(id, text)
  if (tweet) {
    res.status(200).json(tweet)
  } else {
    res.status(400).json({ message: `Tweet id(${id}) not found` })
  }
}

export async function removeTweet(req, res, next) {
  const id = req.params.id
  await tweetRepository.remove(id)
  res.sendStatus(204)
}