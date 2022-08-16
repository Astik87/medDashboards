const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_cache_tag', {
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CACHE_SALT: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    RELATIVE_PATH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TAG: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_cache_tag',
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
        name: "ix_b_cache_tag_0",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
          { name: "CACHE_SALT" },
          { name: "RELATIVE_PATH", length: 50 },
        ]
      },
      {
        name: "ix_b_cache_tag_1",
        using: "BTREE",
        fields: [
          { name: "TAG" },
        ]
      },
    ]
  });
};
