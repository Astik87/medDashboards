const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_clouds_file_hash', {
    BUCKET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FILE_PATH: {
      type: DataTypes.STRING(760),
      allowNull: false
    },
    FILE_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    FILE_MTIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FILE_HASH: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_clouds_file_hash',
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
        name: "ix_b_clouds_file_hash",
        using: "BTREE",
        fields: [
          { name: "BUCKET_ID" },
          { name: "FILE_PATH", length: 190 },
        ]
      },
    ]
  });
};
