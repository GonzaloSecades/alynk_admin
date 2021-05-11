const Sequelize = require('sequelize')
const config = require('./config/testAlynkConfig')

const db = new Sequelize(config.database,config.username,config.password,{
  host:config.host,
  dialect:config.dialect,
  port:config.port,
  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:10000
  },
  logging:false
});

module.exports = db;
