#!/bin/bash

cd app/react
npm install --only=prod
NODE_PATH=src npm run-script build
cd -