#!/bin/sh
npm --prefix ../client run build
rm -rf /build
cp -r ../client/build ./