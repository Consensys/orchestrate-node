FROM golang:1.13 AS builder

ARG PROTOC_GEN_GO_TAG
ARG GRPC_GATEWAY_TAG
ARG GOPATH

ENV GOPATH ${GOPATH}

RUN apt-get update && apt-get install -y unzip

RUN GO111MODULE=off go get github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway

RUN GO111MODULE=on go get \
    github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@${GRPC_GATEWAY_TAG} \
    github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger@${GRPC_GATEWAY_TAG} \
    github.com/golang/protobuf/protoc-gen-go@${PROTOC_GEN_GO_TAG}


FROM node:12

ARG PROTOC_TAG
ARG GOPATH

ENV GOPATH ${GOPATH}

RUN apt-get update && apt-get install -y unzip

WORKDIR /protoc

RUN curl -L https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_TAG}/protoc-${PROTOC_TAG}-linux-x86_64.zip -o protoc.zip \
    && unzip protoc.zip \
    && mv ./bin/protoc /usr/local/bin/protoc \
    && mv ./include/google /usr/local/include/google \
    && rm -rf /protoc

RUN chmod +x /usr/local/bin/protoc
RUN chmod 777 -R /usr/local/include/google

COPY --from=builder ${GOPATH} ${GOPATH}

WORKDIR /src

USER 1000

