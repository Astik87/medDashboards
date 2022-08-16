const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_socialservices_contact', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CONTACT_USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CONTACT_XML_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CONTACT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTACT_LAST_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTACT_PHOTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LAST_AUTHORIZE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NOTIFY: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_socialservices_contact',
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
        name: "ix_b_socialservices_contact1",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "ix_b_socialservices_contact2",
        using: "BTREE",
        fields: [
          { name: "CONTACT_USER_ID" },
        ]
      },
      {
        name: "ix_b_socialservices_contact3",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
      {
        name: "ix_b_socialservices_contact4",
        using: "BTREE",
        fields: [
          { name: "LAST_AUTHORIZE" },
        ]
      },
    ]
  });
};
