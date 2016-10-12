'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
    name: DataTypes.STRING,
    devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};

'use strict';