const config = {
  port:'3306',
  host:'35.202.101.48',
  username:'dev',
  password:'Alynk123',
  database:'alynk_app_db',
  dialect:'mariadb'
}

// sequelize-auto -h 35.202.101.48 -d alynk_app_db -u dev -x Alynk123 -p 3306 --dialect mariadb -c /home/gon/Desktop/Alynk/icon_loader/server/models/index.js 
// /home/gon/Desktop/Alynk/icon_loader/server/models/index.js

module.exports = config;