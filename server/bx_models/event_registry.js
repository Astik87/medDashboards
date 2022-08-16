const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_registry', {
    ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UF_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_EVENT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_USER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_SHOW_PRC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_RQ_ACCEPT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ACCEPT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ACCEPT_PRC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_VIDEO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_VIDTIME: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_KEY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SECTIONS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DATE_CONNECTION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_UTM_SOURCE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_MEDIUM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_CAMPAIGN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_TERM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_UTM_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DATE_UPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_INTRAMURAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_registry',
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
