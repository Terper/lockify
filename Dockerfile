# build stage
FROM node:18-alpine AS build
COPY . .
RUN npm install && npm run build

# production stage
FROM nginx:alpine
COPY --from=build /dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]