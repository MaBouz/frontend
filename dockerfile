FROM node:14.15.4 as builder
WORKDIR /app
RUN npm install @angular/cli
RUN npm install --no-package-lock
COPY . .
RUN npm run build --force
FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
