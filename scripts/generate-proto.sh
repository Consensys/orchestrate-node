#!/bin/bash

# Exit on error
set -Eeu

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./src"

# Generate stubs
for p in `find . -name *.proto -not -path "./node_modules/*"`; do
    echo "# $p"
    protoc -I. \
      -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway \
      -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
      --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
      --js_out=import_style=commonjs,binary:${OUT_DIR} \
      --ts_out="${OUT_DIR}" $p
done
