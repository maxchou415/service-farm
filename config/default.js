module.exports = {
  app: {
    name: 'airloft_api_v2'
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
    }
  },
  secret: {
    password: '',
    token: ''
  },
  gcp: {
    geocodingApiKey: process.env.GCP_GEOCODING_API_KEY
  }
}
