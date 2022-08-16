const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_service_rtg_queue', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_INSERT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CLIENT_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ACCOUNT_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    AUDIENCE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PARENT_ID: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CONTACT_TYPE: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    VALUE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ACTION: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    DATE_AUTO_REMOVE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_seo_service_rtg_queue',
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
        name: "IX_B_SEO_SRV_RTG_QUEUE_1",
        using: "BTREE",
        fields: [
          { name: "ACTION" },
          { name: "DATE_AUTO_REMOVE" },
        ]
      },
      {
        name: "IX_B_SEO_SRV_RTG_QUEUE_2",
        using: "BTREE",
        fields: [
          { name: "TYPE" },
          { name: "ACTION" },
        ]
      },
    ]
  });
};
