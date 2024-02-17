/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
//   return Promise.all([
//     wait1(t1 * 1000),
//     wait2(t2 * 1000),
//     wait3(t3 * 1000),
//   ]).then(() => {
//     const endTime = Date.now();
//     return endTime - begTime;
//   });
// }

async function calculateTime(t1, t2, t3) {
  const begTime = Date.now();
  await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
  return Date.now() - begTime;
}

module.exports = calculateTime;
