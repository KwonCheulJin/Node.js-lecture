import express from 'express'
import 'express-async-errors'

// import * as tweetController from '../controller/tweet.js'

const router = express.Router()

// POST /signup
router.post('/signup', (req, res) => {
  const { username, password, name, email, url } = req.body
  console.log(username, password, name, email, url);
})







export default router
