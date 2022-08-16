const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_file_duplicate', {
    DUPLICATE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ORIGINAL_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    COUNTER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    ORIGINAL_DELETED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_file_duplicate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DUPLICATE_ID" },
          { name: "ORIGINAL_ID" },
        ]
      },
      {
        name: "ix_file_duplicate_duplicate",
        using: "BTREE",
        fields: [
          { name: "ORIGINAL_ID" },
        ]
      },
    ]
  });
};
