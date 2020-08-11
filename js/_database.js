const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mysqlson',
  password: '823543',
  port: 5432,
})

module.exports = client
