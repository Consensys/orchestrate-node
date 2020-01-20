.PHONY: all protobuf

protobuf: ## Generate protobuf stubs
	# Delete existing stubs
	@find . -type f -name '*._pb.js' -delete
	@docker-compose -f scripts/docker-compose.yml up --build
