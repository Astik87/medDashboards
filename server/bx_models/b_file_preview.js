const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_file_preview', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PREVIEW_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PREVIEW_IMAGE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TOUCHED_AT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_file_preview',
    timestamps: true,
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
        name: "IX_B_FILE_PL_TOUCH",
        using: "BTREE",
        fields: [
          { name: "TOUCHED_AT" },
        ]
      },
      {
        name: "IX_B_FILE_PL_FILE",
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
        ]
      },
    ]
  });
};
