const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_file_hash', {
    FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FILE_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    FILE_HASH: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_file_hash',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
        ]
      },
      {
        name: "ix_file_hash_size_hash",
        using: "BTREE",
        fields: [
          { name: "FILE_SIZE" },
          { name: "FILE_HASH" },
        ]
      },
    ]
  });
};
