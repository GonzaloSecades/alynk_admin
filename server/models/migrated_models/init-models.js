var DataTypes = require("sequelize").DataTypes;
var _account = require("./account");
var _email_reminder = require("./email_reminder");
var _instrument_icon = require("./instrument_icon");
var _instrument_icons = require("./instrument_icons");
var _operation = require("./operation");
var _order = require("./order");
var _setting = require("./setting");
var _task_registry = require("./task_registry");
var _user = require("./user");
var _user_account = require("./user_account");

function initModels(sequelize) {
  var account = _account(sequelize, DataTypes);
  var email_reminder = _email_reminder(sequelize, DataTypes);
  var instrument_icon = _instrument_icon(sequelize, DataTypes);
  var instrument_icons = _instrument_icons(sequelize, DataTypes);
  var operation = _operation(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var setting = _setting(sequelize, DataTypes);
  var task_registry = _task_registry(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_account = _user_account(sequelize, DataTypes);

  account.belongsToMany(user, { as: 'users', through: user_account, foreignKey: "accountId", otherKey: "userId" });
  user.belongsToMany(account, { as: 'accounts', through: user_account, foreignKey: "userId", otherKey: "accountId" });
  user_account.belongsTo(account, { as: "account", foreignKey: "accountId"});
  account.hasMany(user_account, { as: "user_accounts", foreignKey: "accountId"});
  user_account.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(user_account, { as: "user_accounts", foreignKey: "userId"});

  return {
    account,
    email_reminder,
    instrument_icon,
    instrument_icons,
    operation,
    order,
    setting,
    task_registry,
    user,
    user_account,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
