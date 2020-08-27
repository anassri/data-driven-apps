const { username, password, database, host } = require('./index').db;




module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
  },
  test: {
    username,
    password,
    "database": "reading_list_test",
    host,
    dialect: "postgres",
  },
  production: {
    username,
    password,
    "database": "reading_list_production",
    host,
    dialect: "postgres",
  }
}
