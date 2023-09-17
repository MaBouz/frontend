FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install --no-package-lock
RUN ng build
FROM nginx:alpine
COPY --from=node /var/lib/jenkins/workspace/fontend1/frontend/dist/frontend /usr/share/nginx/html
