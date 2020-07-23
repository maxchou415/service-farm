module.exports = (sequelize, DataTypes) => {
  const endpoints = sequelize.define('endpoints', {
    url: DataTypes.STRING,
    description: DataTypes.STRING,
    name: DataTypes.STRING,
    privilege: DataTypes.STRING
  }, {})
  endpoints.associate = function (models) {
    // associations can be defined here
  }
  return endpoints
}
