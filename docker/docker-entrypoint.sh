#!/bin/sh

if [ ! -z "$API" ]; then
    echo "Replacing API"
    find /app/.next -type f -print0 | xargs -0 sed -i 's|smartcity-dev.jakarta.go.id/api/v1|'"$API"'|g'
fi

yarn start