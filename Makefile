.PHONY: all protobuf import-proto

# gitlab options
PROTO_REPO=orchestrate
PROTO_DIST_DIR=types
PROTO_SRC_DIR=types
COMMIT_HASH=5f1a7a66912923437150624617dae387022590db

protobuf: ## Generate protobuf stubs
	# Delete existing stubs
	@find . -type f -name '*._pb.js' -delete
	@docker-compose -f scripts/docker-compose.yml up --build

import-proto:
	@rm -rf orchestrate $(PROTO_DIST_DIR)
	@git clone --single-branch git@gitlab.com:ConsenSys/client/fr/core-stack/$(PROTO_REPO).git;
	@cd $(PROTO_REPO)
	@git checkout $(COMMIT)
	@cd ..
	@mkdir -p $(PROTO_DIST_DIR);
	@mv $(PROTO_REPO)/$(PROTO_SRC_DIR)/* $(PROTO_DIST_DIR);
	@rm -rf $(PROTO_REPO)/;
	@find ./$(PROTO_DIST_DIR) -type f -name '*.go' -delete
	@find ./$(PROTO_DIST_DIR) -type d -empty -delete
