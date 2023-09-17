FROM node:14.15.4 as node
WORKDIR /app
RUN npm install @angular/cli
RUN npm install --no-package-lock
COPY . .
RUN npm run build --force
FROM nginx:alpine
COPY --from=node /app/dist/frontend /usr/share/nginx/html
