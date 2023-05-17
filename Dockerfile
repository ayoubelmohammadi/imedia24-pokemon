# build environment
FROM node:14.5.0-alpine AS compiler
WORKDIR /app
COPY . ./app
RUN npm i
RUN npm build
# FROM nginx:latest-with-onbuild
FROM nginx:latest

# it works to copy
COPY --from=compiler /app/build/ /usr/share/nginx/html/

EXPOSE 80