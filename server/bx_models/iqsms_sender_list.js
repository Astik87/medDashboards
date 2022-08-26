const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iqsms_sender_list', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PHONE: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    TEXT: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    STATUS: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: false
    },
    SCHEDULE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COMMENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SITE_ID: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SENDER: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    PARAMS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'iqsms_sender_list',
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
        name: "ix_status",
        using: "BTREE",
        fields: [
          { name: "STATUS" },
        ]
      },
    ]
  });
};
