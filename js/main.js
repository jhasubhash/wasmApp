
init = async function() {
  const WorkerModule = await import("worker-loader!./worker.js");
  const myWorker = WorkerModule.default();
  let data = 1024;
  let wasmObj = new self.WasmObject();
  let obj = {};
  obj.data = data;
  obj.wasmObj = wasmObj;
  console.log(obj);
  myWorker.postMessage(obj);
  console.log("Message posted to worker");

  myWorker.onmessage = function (e) {
    console.log("Message received from worker ");
    console.log(e.data);
  };
}
exports.init = init;