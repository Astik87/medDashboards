const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_app_password', {
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
    APPLICATION_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DIGEST_PASSWORD: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    },
    COMMENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SYSCOMMENT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_app_password',
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
        name: "ix_app_password_user",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
