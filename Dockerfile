FROM node
COPY . /app
WORKDIR /app
CMD node src/server.js
