/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function resolveAfter(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, t * 1000);
  });
}
function wait1(t) {
  return resolveAfter(t);
}

function wait2(t) {
  return resolveAfter(t);
}

function wait3(t) {
  return resolveAfter(t);
}

// function calculateTime(t1, t2, t3) {
//   const begTime = Date.now();
//   return wait1(t1)
//     .then(() => wait2(t2))
//     .then(() => wait3(t3))
//     .then(() => Date.now() - begTime);
// }

async function calculateTime(t1, t2, t3) {
  const begTime = Date.now();
  await resolveAfter(t1);
  await resolveAfter(t2);
  await resolveAfter(t3);
  return Date.now() - begTime;
}

module.exports = calculateTime;
