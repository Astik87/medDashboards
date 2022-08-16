const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_smile_lang', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "S"
    },
    SID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_smile_lang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "UX_SMILE_SL",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TYPE" },
          { name: "SID" },
          { name: "LID" },
        ]
      },
    ]
  });
};
