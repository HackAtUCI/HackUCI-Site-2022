#!/bin/bash

cd app/client
npm install --only=prod
NODE_PATH=src npm run-script build
cd -