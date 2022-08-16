const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_event_type', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    EVENT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 150
    },
    EVENT_TYPE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "email"
    }
  }, {
    sequelize,
    tableName: 'b_event_type',
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
        name: "ux_1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EVENT_NAME" },
          { name: "LID" },
        ]
      },
    ]
  });
};
