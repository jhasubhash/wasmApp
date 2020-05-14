#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <iostream>
#include "../inc/app.h"
#include "../inc/memoryManager.h"

using namespace emscripten;

void tryAllocationToWasmFromJS(){
    char* ptr = new char[100*1024*1024]; //100 MB
    std::cout<<ptr<<std::endl;
    std::cout<<"wasm size :"<<memory_manager::getWasmMemorySize()<<std::endl;
    delete[] ptr;
}

void tryAllocationToJSFromWasm(){
    emscripten::val::global().call<void>("_tryAllocationToJSFromWasm");
}

void print(std::string msg){
    std::cout<<"printing in wasm side "<<msg<<std::endl;
}

EMSCRIPTEN_BINDINGS(FunctionBindings)
{
    function("print", &print);
    function("getWasmMemorySize", &memory_manager::getWasmMemorySize);
    function("tryAllocationToWasm", &tryAllocationToWasmFromJS);
    function("tryAllocationToJS", &tryAllocationToJSFromWasm);
}