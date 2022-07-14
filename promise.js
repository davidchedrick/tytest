// const promise = new Promise((resolve, reject) => {
//  setTimeout(() => resolve(2), 1000)
// })
// console.log(promise)
const promise = Promise.resolve(3);

Promise.all([
  Promise.resolve(33),
  Promise.resolve(22),
  Promise.resolve(44)
]).then(console.log);

console.log(promise);

promise
  .then(value => value * 2)
  .then(value => value + 1)
  .then(console.log)
  .catch(error => console.log('oh no! ' + error))
  .finally(() => console.log('done'));