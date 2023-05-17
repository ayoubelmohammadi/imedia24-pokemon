FROM node:16.18.0-alpine as build

WORKDIR /app

COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm i
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# expose port 80 to the outer world
EXPOSE 80
# start nginx
CMD ["nginx", "-g", "daemon off;"]