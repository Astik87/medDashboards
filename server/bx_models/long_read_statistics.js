const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('long_read_statistics', {
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
    UF_PAGE_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LINKS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DOWNLOADED_FILES: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'long_read_statistics',
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
