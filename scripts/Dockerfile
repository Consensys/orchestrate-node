FROM alpine:1.12

ARG PROTOC_TAG

RUN apt-get update && apt-get install unzip

WORKDIR /protoc

RUN curl -L https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_TAG}/protoc-${PROTOC_TAG}-linux-x86_64.zip -o protoc.zip

RUN unzip protoc.zip

RUN mv ./bin/protoc  /usr/local/bin/protoc && mv ./include/google /usr/local/include/google

WORKDIR /

RUN rm -rf protoc

WORKDIR /src