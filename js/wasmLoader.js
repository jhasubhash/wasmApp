const wasmPath = require("../web/gen/app.wasm");
async function loadWasm() {
    const exports_ = await import("../web/gen/app.js");
    return new Promise((resolve, reject) => {
        const WasmModule = {
            locateFile: function (path) {
                return wasmPath.default;
            }
        };
        exports_.default(WasmModule).then((Module)=>{
            delete Module['then'];
            resolve(Module);
        });
    });
}
exports.loadWasm = loadWasm;