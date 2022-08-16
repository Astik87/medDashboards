const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_translate_file', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PATH_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LANG_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    FULL_PATH: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    PHRASE_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    INDEXED: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    },
    INDEXED_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_translate_file',
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
        name: "IX_TRNSL_FL_PATH",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PATH_ID" },
          { name: "LANG_ID" },
        ]
      },
      {
        name: "IX_TRNSL_FULL_PATH",
        using: "BTREE",
        fields: [
          { name: "FULL_PATH", length: 255 },
        ]
      },
    ]
  });
};
