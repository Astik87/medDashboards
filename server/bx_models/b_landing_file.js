const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_file', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TEMP: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_landing_file',
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
        name: "IX_ENTITY",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "ENTITY_TYPE" },
        ]
      },
      {
        name: "IX_FILE",
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
        ]
      },
      {
        name: "IX_TEMP",
        using: "BTREE",
        fields: [
          { name: "TEMP" },
        ]
      },
    ]
  });
};
