FROM node:16

WORKDIR /app/src

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
COPY . .
RUN npx sequelize-cli db:create
RUN npx sequelize-cli db:migrate
CMD [ "node", "src/index.js" ]