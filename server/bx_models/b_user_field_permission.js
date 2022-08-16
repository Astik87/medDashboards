const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_field_permission', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_TYPE_ID: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    USER_FIELD_ID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ACCESS_CODE: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    PERMISSION_ID: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    VALUE: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_user_field_permission',
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
        name: "ROLE_ID",
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE_ID" },
        ]
      },
      {
        name: "GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "USER_FIELD_ID" },
        ]
      },
      {
        name: "PERMISSION_ID",
        using: "BTREE",
        fields: [
          { name: "PERMISSION_ID" },
        ]
      },
    ]
  });
};
