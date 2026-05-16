#!/bin/sh
set -e

echo "==> git pull"
git pull

echo "==> docker compose down"
docker compose down

echo "==> docker compose up -d"
docker compose up -d --build

echo "==> done. running at http://localhost:${PORT:-5173}"
