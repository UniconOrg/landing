# Production image for Next.js (output: "standalone") with pnpm.
# Foundathyon Deploy defaults: Dockerfile path "Dockerfile", port 3000, health path "/".

ARG NODE_VERSION=22.12.0

FROM node:${NODE_VERSION}-alpine AS base
RUN apk add --no-cache libc6-compat
# pnpm is activated through corepack; the lockfile pins the resolved dependencies.
ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
ENV NEXT_TELEMETRY_DISABLED=1
# Build-time public variables. Pass them with --build-arg; no values are baked in here.
# Example: ARG NEXT_PUBLIC_API_URL (this project does not use any NEXT_PUBLIC_* today).
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
USER node
EXPOSE 3000
CMD ["node", "server.js"]
