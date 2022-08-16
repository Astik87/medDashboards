const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_hlblock_entity_lang', {
    ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_hlblock_entity_lang',
    timestamps: false
  });
};
