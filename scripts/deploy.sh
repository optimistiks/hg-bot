#!/usr/bin/env sh
export SSHPASS=$SSH_PASS
sshpass -e ssh $SSH_CONN $PROJECT_PATH/deploy.sh > /dev/null 2>&1
echo "DONE"