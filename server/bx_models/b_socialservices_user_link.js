const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_socialservices_user_link', {
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
    SOCSERV_USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LINK_USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LINK_UID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    LINK_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINK_LAST_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINK_PICTURE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LINK_EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_socialservices_user_link',
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
        name: "ix_b_socialservices_user_link_5",
        using: "BTREE",
        fields: [
          { name: "SOCSERV_USER_ID" },
        ]
      },
      {
        name: "ix_b_socialservices_user_link_6",
        using: "BTREE",
        fields: [
          { name: "LINK_USER_ID" },
          { name: "TIMESTAMP_X" },
        ]
      },
      {
        name: "ix_b_socialservices_user_link_7",
        using: "BTREE",
        fields: [
          { name: "LINK_UID" },
        ]
      },
    ]
  });
};
