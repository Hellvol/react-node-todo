FROM node:16.14-alpine
WORKDIR /app-back
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001