const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('long_read', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_USER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_CONNECT_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_CLOSE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_FULL_TIME: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_VIEWING_PERC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_ESTIMATION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_PAGE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_VIEWED_VIDEO: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_TEST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_EVENT: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'long_read',
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
