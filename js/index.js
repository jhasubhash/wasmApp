let app = require("./main.js");
let loader = require("./wasmLoader.js");
loader.loadWasm().then((Module)=>{
    Module.print("Hello from JS");
    self.WasmObject = Module.WasmObject;
    app.init();
});