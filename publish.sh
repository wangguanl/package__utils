#!/bin/bash

set -e

npm run build

cd dist

npm publish
