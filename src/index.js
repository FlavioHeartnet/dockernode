import express from 'express'
import bodyParser from 'body-parser'
import {getUsers,createUser, updateUser} from './../db/db.js'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', getUsers)

app.post('/users', createUser)

app.post('/update-user', updateUser)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
