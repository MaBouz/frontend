FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install --no-package-lock
RUN npm run build --prod
FROM nginx:alpine
COPY --from=node /app/frontend /usr/share/nginx/html
