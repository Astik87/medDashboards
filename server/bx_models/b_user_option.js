const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_option', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CATEGORY: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    COMMON: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_user_option',
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
        name: "ux_user_category_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "CATEGORY" },
          { name: "NAME" },
        ]
      },
    ]
  });
};
