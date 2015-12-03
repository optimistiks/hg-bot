#!/bin/sh
cd ~/projects/hg-bot
git pull
npm run stop
npm run start
