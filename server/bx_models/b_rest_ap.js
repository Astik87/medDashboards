const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_ap', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    COMMENT: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ""
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_LOGIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LAST_IP: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rest_ap',
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
        name: "ix_b_rest_ap",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "PASSWORD" },
          { name: "ACTIVE" },
        ]
      },
    ]
  });
};
