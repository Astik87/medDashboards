const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_event', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EVENT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MESSAGE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    C_FIELDS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_EXEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SUCCESS_EXEC: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    DUPLICATE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_event',
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
        name: "ix_success",
        using: "BTREE",
        fields: [
          { name: "SUCCESS_EXEC" },
        ]
      },
      {
        name: "ix_b_event_date_exec",
        using: "BTREE",
        fields: [
          { name: "DATE_EXEC" },
        ]
      },
    ]
  });
};
