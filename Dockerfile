FROM node:18-alpine AS builder
WORKDIR /app

# install dependencies
COPY package.json package-lock.json* tsconfig*.json vite.config.ts ./
RUN npm ci

# copy source & build
COPY . .
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}
RUN npm run build


# serve with nginx
FROM nginx:stable-alpine
# copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# expose nginx standard HTTP port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]