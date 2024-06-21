# Stage 1: Building the code
FROM node:18.17.0 as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --verbose
COPY . .
RUN npm run build

# Stage 2: Run the code
FROM node:18.17.0
WORKDIR /app
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Cloud Run expects the container to listen on port 8080
EXPOSE 8080

ENV PORT=8080
CMD ["npm", "start"]
