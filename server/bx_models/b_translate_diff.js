const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_translate_diff', {
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
    PATH_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LANG_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    AGAINST_LANG_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    EXCESS_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    DEFICIENCY_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_translate_diff',
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
        name: "IXU_TRNSL_DIFF",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
          { name: "LANG_ID" },
          { name: "AGAINST_LANG_ID" },
        ]
      },
      {
        name: "IX_TRNSL_DIFF_PATH",
        using: "BTREE",
        fields: [
          { name: "PATH_ID" },
          { name: "LANG_ID" },
        ]
      },
    ]
  });
};
