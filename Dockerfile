FROM mhart/alpine-node:11 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN yarn run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
