const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_service_webhook', {
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
    EXTERNAL_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SECURITY_CODE: {
      type: DataTypes.STRING(32),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_seo_service_webhook',
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
        name: "IX_B_SEO_SERVICE_WEBHOOK_1",
        using: "BTREE",
        fields: [
          { name: "TYPE" },
          { name: "EXTERNAL_ID" },
        ]
      },
    ]
  });
};
