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

export async function getAll() {
  return tweets
}

export async function getAllByUsername(user_name) {
  return tweets.filter(tweet => tweet.username === user_name)
}

export async function getById(id) {
  return tweets.find(tweet => tweet.id === id)
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  }
  tweets = [tweet, ...tweets]
  return tweet
}

export async function update(id, text) {
  const tweet = tweets.find(tweet => tweet.id === id)
  if (tweet) tweet.text = text
  return tweet
}

export async function remove(id) {
  return tweets = tweets.filter(tweet => tweet.id !== id)
}