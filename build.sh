#!/usr/bin/env bash
rm build/ -rf
mkdir build
cd build
/Users/sujha/Documents/xd/emcc_playground/emsdk/emscripten/1.38.31/em++ --bind -g4 ../cpp/src/app.cpp ../cpp/src/memoryManager.cpp -s WASM=1 -s MODULARIZE=1 -s ALLOW_MEMORY_GROWTH=1 -s ENVIRONMENT='web' -o app.js || exit 1
cd ..
rm web/ -rf
mkdir -p web/gen
mv build/app.js web/gen/
mv build/app.wasm web/gen/