export default class TweetService {

  constructor(http) {
    this.http = http
  }
  async getTweets(username) {
    const query = username ? `?user_name=${username}` : ''
    return this.http.fetch(`/write${query}`, {
      method: "GET",
    })
  }

  async postTweet(text) {
    return this.http.fetch(`/write`, {
      method: "POST",
      body: JSON.stringify({ text, name: 'Ellie', username: 'ellie' })
    })
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/write/${tweetId}`, {
      method: "DELETE",
    })
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/write/${tweetId}`, {
      method: "PUT",
      body: JSON.stringify({ text })
    })
  }
}