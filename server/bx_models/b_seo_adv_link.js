const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_adv_link', {
    LINK_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    LINK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BANNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_seo_adv_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LINK_TYPE" },
          { name: "LINK_ID" },
          { name: "BANNER_ID" },
        ]
      },
    ]
  });
};
