import pg from 'pg'
import config from './../config/config.js'
const pool = new pg.Pool({
    user: config.development.username,
    host: config.development.host,
    database: config.development.database,
    password: config.development.password,
    port: config.development.port,
  })

  export const getUsers = (req,res) =>{
    pool.query('SELECT * FROM users ORDER BY name ASC', (err, result)=>{
        if(err){
          throw err
        }
        let html = '<h1>Full Cycle Rocks!</h1>'
        let list = '<ul>'
        result.rows.forEach(user => {
            list+=`<li>${user.name}</li>`
        });
        list+= '</ul>'
        html+=list
        res.send(html)
      })
  }

 export const createUser = (req,res) => {
    const name = req.body.name
    pool.query('INSERT INTO users (name) VALUES ($1)', [name], (err, result)=>{
      if(err){
        throw err
      }
      res.status(201).send(`Novo usuario: ${name}`)
    })
  }

 export const updateUser = (req, res) =>{
    const {id, name} = req.body
    pool.query('UPDATE users set name=$2 WHERE id = $1', [id,name], (err, result) =>{
      if(err){
        throw err
      }
      res.status(200).send(`Atualizado com sucesso!`)
    })
  }


export default pool
