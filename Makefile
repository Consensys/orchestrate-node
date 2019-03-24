.PHONY: all protobuf import-proto

# gitlab options
PROTO_REPO=pkg
PROTO_DIR=protos
GITLAB_PATH=ConsenSys/client/fr/core-stack

protobuf: ## Generate protobuf stubs
	@sh scripts/generate-proto.sh

import-proto:
	rm -rf $(PROTO_REPO) $(PROTO_DIR);
	git clone -b $(PROTO_TAG) --single-branch git@gitlab.com:$(GITLAB_PATH)/$(PROTO_REPO).git;
	mkdir -p $(PROTO_DIR);
	mv $(PROTO_REPO)/$(PROTO_DIR)/* $(PROTO_DIR);
	rm -rf $(PROTO_REPO)/;
	rm $(PROTO_DIR)/*/*.go;

