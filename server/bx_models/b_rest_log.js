const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_log', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    CLIENT_ID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PASSWORD_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCOPE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    METHOD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REQUEST_METHOD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    REQUEST_URI: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REQUEST_AUTH: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    REQUEST_DATA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RESPONSE_STATUS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RESPONSE_DATA: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rest_log',
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
