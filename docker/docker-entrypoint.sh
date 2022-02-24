#!/bin/sh

if [ ! -z "$WEBCORP_DOMAIN" ]; then
    echo "Replacing WEBCORP_DOMAIN"
    find /app/.next -type f -print0 | xargs -0 sed -i 's|smartcity-dev.jakarta.go.id/api/v1|'"$WEBCORP_DOMAIN"'|g'
fi

yarn start