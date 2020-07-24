module.exports = {
  app: {
    name: 'service_farm'
  },
  database: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    pagination: {
      limit: process.env.DB_PAGINATION_LIMIT || 10
    }
  },
  secret: {
    password: '',
    token: ''
  }
}
