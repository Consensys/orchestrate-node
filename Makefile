.PHONY: all protobuf import-proto

# gitlab options
PROTO_REPO=pkg
PROTO_DIST_DIR=proto
PROTO_SRC_DIR=types
GITLAB_PATH=ConsenSys/client/fr/core-stack
PROTO_TAG=v0.6.1

protobuf: ## Generate protobuf stubs
	@docker-compose -f scripts/docker-compose.yml up

import-proto:
	rm -rf $(PROTO_REPO) $(PROTO_DIST_DIR)
	git clone -b $(PROTO_TAG) --single-branch git@gitlab.com:$(GITLAB_PATH)/$(PROTO_REPO).git;
	mkdir -p $(PROTO_DIST_DIR);
	mv $(PROTO_REPO)/$(PROTO_SRC_DIR)/* $(PROTO_DIST_DIR);
	rm -rf $(PROTO_REPO)/;
	rm $(PROTO_DIST_DIR)/*/*.go;

