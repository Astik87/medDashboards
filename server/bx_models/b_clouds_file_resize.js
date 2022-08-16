const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_clouds_file_resize', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ERROR_CODE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "0"
    },
    FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PARAMS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FROM_PATH: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    TO_PATH: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_clouds_file_resize',
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
        name: "ix_b_file_resize_ts",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
      {
        name: "ix_b_file_resize_path",
        using: "BTREE",
        fields: [
          { name: "TO_PATH", length: 100 },
        ]
      },
      {
        name: "ix_b_file_resize_file",
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
        ]
      },
    ]
  });
};
