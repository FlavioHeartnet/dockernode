# dockernode

Installing
1. run docker-compose up -d --build
2. run docker exec -it app bash
3. inside the node container run npx sequelize-cli db:migrate
4. and the run npm run start

Usage(host:3000/):

path:
1. "/" = Home page with "Full cicle Rocks" webpage
2. "users" = API to insert new users (POST) Body E.g: {"name": "John Doe"}
3. "update-user" = API to edit an existing user (POST) Body E.g: {"id": "1", "name": "John Doe"}
