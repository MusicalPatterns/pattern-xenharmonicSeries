MAKEFLAGS += --no-print-directory --always-make

LOCAL_PATTERN=$(notdir $(shell pwd))

build:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/build.sh tsc package

commit:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/commit.sh

lint:
	@set -e; pushd ../..; make lint PATTERN=${LOCAL_PATTERN}; popd

publish:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/publish.sh package

pull:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/pull.sh

push:
	@set -e; ../../node_modules/@musical-patterns/cli/bin/push.sh

share_config:
	@set -e; pushd ../..; make share_config PATTERN=${LOCAL_PATTERN}; popd

ship:
	@set -e; pushd ../..; make ship PATTERN=${LOCAL_PATTERN}; popd

snapshot:
	@set -e; pushd ../..; make snapshot PATTERN=${LOCAL_PATTERN}; popd

test:
	@set -e; pushd ../..; make test PATTERN=${LOCAL_PATTERN}; popd

update:
	@set -e; pushd ../..; make update PATTERN=${LOCAL_PATTERN}; popd
