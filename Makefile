.PHONY: all protobuf

protobuf: ## Generate protobuf stubs
	@sh scripts/generate-proto.sh