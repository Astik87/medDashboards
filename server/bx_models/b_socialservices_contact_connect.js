const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_socialservices_contact_connect', {
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
    CONTACT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINK_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CONTACT_PROFILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CONTACT_PORTAL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CONNECT_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "P"
    },
    LAST_AUTHORIZE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_socialservices_contact_connect',
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
        name: "ix_b_socialservices_contact_connect1",
        using: "BTREE",
        fields: [
          { name: "CONTACT_ID" },
        ]
      },
      {
        name: "ix_b_socialservices_contact_connect2",
        using: "BTREE",
        fields: [
          { name: "LINK_ID" },
        ]
      },
      {
        name: "ix_b_socialservices_contact_connect3",
        using: "BTREE",
        fields: [
          { name: "LAST_AUTHORIZE" },
        ]
      },
    ]
  });
};
