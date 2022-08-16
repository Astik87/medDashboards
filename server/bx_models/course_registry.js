const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('course_registry', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    UF_KEY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_VIDTIME: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_VIDEO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ACCEPT_PRC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_ACCEPT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_RQ_ACCEPT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_SHOW_PRC: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    UF_USER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_COURSE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'course_registry',
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
