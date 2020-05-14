const myWorker = new Worker("js/worker.js");
let data = 1024;
myWorker.postMessage(data);
console.log("Message posted to worker");

myWorker.onmessage = function (e) {
  console.log("Message received from worker " + e.data);
};
