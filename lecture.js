// Chaining promises together 
const aRandomPromise =
  (new Promise(myExecutorFunc))
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);

const somePromise = (new Promise(promiseArgument)).then(fulfillment1).then(fulfillment2).fulfillment2).catch(rejectionMessage);

