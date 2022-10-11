const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('visits_log', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_DOC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_SPEC: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_STAT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_CONNECT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ELEMID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LINK: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LINK_ADM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_NUMBER: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_TELE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_NOT_IN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ROOMID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_VIDEO_URLS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'visits_log',
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
