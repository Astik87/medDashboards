const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_role', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TITLE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACCESS_CODES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ADDITIONAL_RIGHTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CREATED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MODIFIED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_MODIFY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'b_landing_role',
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
        name: "IX_B_ROLE_TYPE",
        using: "BTREE",
        fields: [
          { name: "TYPE" },
        ]
      },
    ]
  });
};
