const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_service_queue', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    SERVICE_TYPE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CLIENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    }
  }, {
    sequelize,
    tableName: 'b_seo_service_queue',
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
        name: "IX_B_SEO_SERVICE_QUEUE_TYPE",
        using: "BTREE",
        fields: [
          { name: "TYPE" },
        ]
      },
      {
        name: "IX_B_SEO_SERVICE_SERVICE_TYPE_CLIENT_ID",
        using: "BTREE",
        fields: [
          { name: "SERVICE_TYPE" },
          { name: "CLIENT_ID" },
        ]
      },
    ]
  });
};
