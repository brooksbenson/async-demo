/*

  3 States of a Promise:

  * Pending
    - Resolved
    - Rejected

*/

function resolveConsumer(value) {
  console.log(value);
}

function rejectConsumer(e) {
  console.log(e.message);
}

const pending = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hello, World');
    reject(new Error('Goodbye, World'));
  }, 2000);
});

pending.then(resolveConsumer).catch(rejectConsumer);

/*
  Promise API
  - resolve: returns resolved promise
  - reject: returns rejected promise
  - all: receives array of promises and returns array of resolve values
  - race: receives array of promises and returns first promise to resolve
*/

const resolvedPromise = Promise.resolve('Hello, World');
resolvedPromise.then(message => console.log(message));

const rejectedPromise = Promise.reject(
  new Error('error objects are displayed with the callstack!')
);
rejectedPromise.catch(err => console.log(err));

const p1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1500);
  });

const p2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });

const allPromises = Promise.all([p1(), p2()]);
allPromises.then(array => console.log(array)).catch(e => console.log(e));

const firstPromise = Promise.race([p1(), p2()]);
firstPromise.then(first => console.log(first));
