const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_hot_keys_code', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CLASS_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COMMENTS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TITLE_OBJ: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IS_CUSTOM: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'b_hot_keys_code',
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
        name: "ix_hot_keys_code_cn",
        using: "BTREE",
        fields: [
          { name: "CLASS_NAME" },
        ]
      },
      {
        name: "ix_hot_keys_code_url",
        using: "BTREE",
        fields: [
          { name: "URL" },
        ]
      },
    ]
  });
};
