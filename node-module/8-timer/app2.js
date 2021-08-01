// const process = require('process')

console.log('code1');
console.time('tiemout 0');
setTimeout(() => {
  console.timeEnd('tiemout 0');
  console.log('setTimeout 0 ');
}, 0);

for (let i = 0; i < 1000; i++) {
  console.log(i);
}
// console.log('code2');
// setImmediate(() => {
//   console.log('setImmediate');
// });

// console.log('code3');
// process.nextTick(() => {
//   console.log('process nextTick');
// });