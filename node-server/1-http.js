const http = require('http');
const { runInNewContext } = require('vm');
// const http2 = require('http2') //https

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

const server = http.createServer((req, res) => {
  console.log('incoming....');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  res.write('welcome')
  res.end()
})

server.listen(8000)