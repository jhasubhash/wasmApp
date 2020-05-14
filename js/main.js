
init = async function() {
  const WorkerModule = await import("worker-loader!./worker.js");
  const myWorker = WorkerModule.default();
  let data = 1024;
  let obj = new self.WasmObject();
  console.log(obj);
  myWorker.postMessage(data);
  console.log("Message posted to worker");

  myWorker.onmessage = function (e) {
    console.log("Message received from worker " + e.data);
  };
}
exports.init = init;