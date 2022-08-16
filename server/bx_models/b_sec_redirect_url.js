const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sec_redirect_url', {
    IS_SYSTEM: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    URL: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    PARAMETER_NAME: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_sec_redirect_url',
    timestamps: false
  });
};
