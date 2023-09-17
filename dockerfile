FROM node:14.15.4 as node
WORKDIR /app
RUN npm install --no-package-lock
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html
