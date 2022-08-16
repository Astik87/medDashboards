const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_translate_path_tree', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PATH_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DEPTH_LEVEL: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_translate_path_tree',
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
        name: "IX_TRNSL_ANCESTOR",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PARENT_ID" },
          { name: "DEPTH_LEVEL" },
          { name: "PATH_ID" },
        ]
      },
      {
        name: "IX_TRNSL_DESCENDANT",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PATH_ID" },
          { name: "PARENT_ID" },
          { name: "DEPTH_LEVEL" },
        ]
      },
    ]
  });
};
