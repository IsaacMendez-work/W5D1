// // Chaining promises together 
// const aRandomPromise =
//   (new Promise(myExecutorFunc))
//   .then(handleFulfilledA)
//   .then(handleFulfilledB)
//   .then(handleFulfilledC)
//   .catch(handleRejectedAny);

// // Exercise one is to turn this...
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }
//
// loadJson('http://httpstat.us/500')
//   .catch(alert); // Error: 500

// // ... into a cleaner async/await function
 async function jsonURL() {
     let response = await fetch(url)
     
 }