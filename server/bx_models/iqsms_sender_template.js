const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iqsms_sender_template', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PHONE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PHONE_COPY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TEXT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    EVENT: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'iqsms_sender_template',
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
        name: "ix_type_active",
        using: "BTREE",
        fields: [
          { name: "TYPE" },
          { name: "ACTIVE" },
        ]
      },
    ]
  });
};
