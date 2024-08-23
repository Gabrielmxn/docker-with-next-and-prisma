#!/bin/sh

# Abort on any error (including if wait-for-it fails).
set -e

# Wait for the backend to be up, if we know where it is.
if [ -n "$CUSTOMERS_HOST" ]; then
  /usr/src/nextjs/bin/wait-for-it.sh "$CUSTOMERS_HOST:${CUSTOMERS_PORT:-6000}"
fi
npx prisma generate && npx prisma migrate deploy
npx prisma db seed
npm run build
npm install --production && npm cache clean --force
# Run the main container command.
exec "$@"