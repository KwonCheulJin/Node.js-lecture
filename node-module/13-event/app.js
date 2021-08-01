const EventEmitter = require('events')
const emitter = new EventEmitter()

const callback1 = (args) => {
  console.log('first callback - ', args);
}
emitter.on('charles', callback1)

emitter.on('charles', (args) => {
  console.log('second callback - ', args);
})

emitter.emit('charles', { message: 1 })
emitter.emit('charles', { message: 2 })
emitter.removeListener('charles', callback1)
emitter.removeAllListeners()
emitter.emit('charles', { message: 3 })

