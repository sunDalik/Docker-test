FROM node
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8000
CMD node src/server.js
