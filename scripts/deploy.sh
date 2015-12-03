#!/usr/bin/env sh
echo $SSH_PASS
echo $SSH_CONN
echo $PROJECT_PATH
export SSHPASS=$SSH_PASS
sshpass -e ssh $SSH_CONN $PROJECT_PATH/deploy.sh