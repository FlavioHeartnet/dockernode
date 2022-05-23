FROM node:16

WORKDIR /app/src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
COPY . .
CMD [ "node", "src/index.js" ]