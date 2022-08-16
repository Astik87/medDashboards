const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_service_subscription', {
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
    GROUP_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CALLBACK_SERVER_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    HAS_AUTH: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_seo_service_subscription',
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
        name: "IX_B_SEO_SERVICE_SUB_1",
        using: "BTREE",
        fields: [
          { name: "TYPE" },
          { name: "GROUP_ID" },
        ]
      },
    ]
  });
};
