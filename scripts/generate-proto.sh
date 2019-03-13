#!/bin/bash

 for p in `find . -name *.proto -not -path "./node_modules/*"`; do
    echo "# $p"
    protoc --js_out=import_style=commonjs,binary:. $p
 done
