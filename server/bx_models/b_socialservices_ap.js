const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_socialservices_ap', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DOMAIN: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ENDPOINT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LOGIN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LAST_AUTHORIZE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SETTINGS: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_socialservices_ap',
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
        name: "ix_socialservices_ap1",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "DOMAIN" },
        ]
      },
    ]
  });
};
