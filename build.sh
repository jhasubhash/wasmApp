rm build/ -rf
mkdir build
cd build
/Users/sujha/Documents/xd/emcc_playground/emsdk/emscripten/1.38.31/em++ --bind -g4 ../cpp/src/app.cpp ../cpp/src/memoryManager.cpp -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -o app.js || exit 1
mv app.js ../web/gen/
mv app.wasm ../web/gen/