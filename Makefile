.PHONY: all import-proto

# gitlab options
PROTO_REPO=orchestrate
PROTO_DIST_DIR=proto
PROTO_SRC_DIR=types
COMMIT_HASH=2e914016b02625daa42e55bc1231e50b0e940e92

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