#!/bin/bash

# Exit on error
set -Eeu

# Generate stubs
for p in `find . -name *.proto -not -path "./node_modules/*"`; do
    echo "# $p"
    protoc -I. \
      -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway \
      -I$GOPATH/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis \
      --js_out=import_style=commonjs,binary:./src $p
done
