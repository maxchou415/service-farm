module.exports = (sequelize, DataTypes) => {
  const services = sequelize.define('services', {
    endpoint: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    docsURL: DataTypes.STRING,
    privilege: DataTypes.STRING,
    authentication: DataTypes.STRING,
    parentEndpointId: DataTypes.INTEGER
  }, {})
  services.associate = function (models) {
    // associations can be defined here
  }
  return services
}
