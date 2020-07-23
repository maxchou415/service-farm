const config = require('config')

module.exports = {
  development: {
    database: config.get('database.name'),
    username: config.get('database.username'),
    password: config.get('database.password'),
    host: config.get('database.host'),
    port: config.get('database.port'),
    dialect: config.get('database.dialect'),
    pool: config.get('database.pool'),
    define: {
      timestamps: true,
      paranoid: true
    }
  },
  staging: {
    database: config.get('database.name'),
    username: config.get('database.username'),
    password: config.get('database.password'),
    host: config.get('database.host'),
    port: config.get('database.port'),
    dialect: config.get('database.dialect'),
    pool: config.get('database.pool'),
    define: {
      timestamps: true,
      paranoid: true
    }
  },
  production: {
    database: config.get('database.name'),
    username: config.get('database.username'),
    password: config.get('database.password'),
    host: config.get('database.host'),
    port: config.get('database.port'),
    dialect: config.get('database.dialect'),
    pool: config.get('database.pool'),
    define: {
      timestamps: true,
      paranoid: true
    }
  }
}
