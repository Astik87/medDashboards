const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sms_template_site', {
    TEMPLATE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_sms_template_site',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "TEMPLATE_ID" },
          { name: "SITE_ID" },
        ]
      },
    ]
  });
};
