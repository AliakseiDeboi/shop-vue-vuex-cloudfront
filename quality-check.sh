#!/bin/bash -

set -o nounset

declare SCRIPT_DIR=$(dirname $(realpath $0))
declare REPO_DIR="$(dirname $SCRIPT_DIR)/shop-vue-vuex-cloudfront"

runChecks () {
	cd $REPO_DIR
	npm run lint
	npm run test:unit
	npm audit
}

main () {
	runChecks
}

main
