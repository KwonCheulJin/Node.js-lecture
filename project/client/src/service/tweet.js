export default class TweetService {

  constructor(baseURL) {
    this.baseURL = baseURL
  }
  async getTweets(username) {
    const query = username ? `?user_name=${username}` : ''
    console.log(this.baseURL);
    const response = await fetch(`${this.baseURL}/write${query}`, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    if (response.status !== 200) {
      throw new Error(data.message)
    }
    return data;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/write`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, name: 'Charles', username: 'charles' })
    })
    const data = await response.json()
    if (response.status !== 200) {
      throw new Error(data.message)
    }
    return data;
  }

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseURL}/write/${tweetId}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.status !== 204) {
      throw new Error()
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${this.baseURL}/write/${tweetId}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
    const data = await response.json()
    if (response.status !== 200) {
      throw new Error(data.message)
    }
    return data;
  }
}