const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_undo', {
    ID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UNDO_TYPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UNDO_HANDLER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIMESTAMP_X: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_undo',
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
    ]
  });
};
