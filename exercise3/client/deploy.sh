#!/bin/sh
npm run build
rm -rf ../api/build
cp -r build ../api/