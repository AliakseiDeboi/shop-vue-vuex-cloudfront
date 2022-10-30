#!/bin/bash

set -o nounset

declare SCRIPT_DIR=$(dirname $(realpath $0))
declare ENV_FILE=$SCRIPT_DIR/.env
FE_HOST_BUILD_DIR=$SCRIPT_DIR/build
FE_REMOTE_DIR=/var/www/fe_app
SSH_ALIAS=centos

yarn install

bash $SCRIPT_DIR/quality-check.sh

if [[ -e $ENV_FILE ]];
then
  echo 'Building application...'
  yarn build
else
  echo "$ENV_FILE is not defined. Create it to proceed please"
fi;

echo "Copying the artefact to VM..."
scp -Crq $FE_HOST_BUILD_DIR/* $SSH_ALIAS:$FE_REMOTE_DIR
