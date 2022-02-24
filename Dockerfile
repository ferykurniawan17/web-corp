FROM git-smartcity.jakarta.go.id:5050/jaki/docker/node:14.15.4-1.22.5 AS base
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .

FROM base AS build
ENV NODE_ENV=production
ENV STAGING="0"
WORKDIR /build
COPY --from=base /app ./
RUN yarn run build

FROM git-smartcity.jakarta.go.id:5050/jaki/docker/node:14.15.4-1.22.5
ENV NODE_ENV=production
ENV PORT=3036
WORKDIR /app
COPY --from=build /build/docker/docker-entrypoint.sh ./docker-entrypoint.sh
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN yarn add next@10.0.0
RUN yarn cache clean

EXPOSE 3036

ENTRYPOINT ["/app/docker-entrypoint.sh"]