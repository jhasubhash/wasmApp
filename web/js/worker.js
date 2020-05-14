onmessage = function (e) {
  console.log("Worker: Message received from main script");
  let result = e;
  console.log("In worker " + e.data);
  postMessage(e.data);
};
