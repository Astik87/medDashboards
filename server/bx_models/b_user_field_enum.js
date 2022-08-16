const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_field_enum', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_FIELD_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VALUE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DEF: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_user_field_enum',
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
        name: "ux_user_field_enum",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_FIELD_ID" },
          { name: "XML_ID" },
        ]
      },
    ]
  });
};
