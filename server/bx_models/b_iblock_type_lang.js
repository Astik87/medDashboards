const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_type_lang', {
    IBLOCK_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SECTION_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ELEMENT_NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_type_lang',
    timestamps: false
  });
};
