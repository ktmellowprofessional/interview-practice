## What is a promise?
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
 
## Example
let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});
 
## Promises vs. Observables
 
Both Promises and Observables will help us work with the asynchronous functionalities in JavaScript. They are very similar in many cases, however, there are still some differences between the two as well, promises are values that will resolve in asynchronous ways like http calls. On the other hand, observables deal with a sequence of asynchronous events. The main differences between them are listed below:

#### promise:
having one pipeline
usually only use with async data return
not easy to cancel

#### observable:
are cancellable
are re-triable by nature such as retry and retryWhen
stream data in multiple pipelines
having array-like operations like map, filter etc
can be created from other sources like events
they are functions, which could be subscribed later on




