# Stage 1: Build
FROM node:22 AS builder

WORKDIR /app

COPY . .

# Stage 2: Production
FROM nginx:alpine

COPY --from=builder /app/index.html /usr/share/nginx/html/index.html
COPY --from=builder /app/style.css /usr/share/nginx/html/style.css
COPY --from=builder /app/app.js /usr/share/nginx/html/app.js

EXPOSE 80