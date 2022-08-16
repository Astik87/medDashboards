const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_translate_phrase', {
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
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PHRASE: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_translate_phrase',
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
        name: "IXU_TRNSL_PHR_PATH_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PATH_ID" },
          { name: "LANG_ID" },
          { name: "CODE" },
        ]
      },
      {
        name: "IX_TRNSL_PHR_PATH",
        using: "BTREE",
        fields: [
          { name: "PATH_ID" },
          { name: "CODE" },
        ]
      },
      {
        name: "IX_TRNSL_FILE",
        using: "BTREE",
        fields: [
          { name: "FILE_ID" },
        ]
      },
      {
        name: "IXF_TRNSL_PHR",
        type: "FULLTEXT",
        fields: [
          { name: "PHRASE" },
        ]
      },
    ]
  });
};
