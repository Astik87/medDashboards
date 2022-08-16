const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_adv_group', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENGINE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OWNER_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    OWNER_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LAST_UPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CAMPAIGN_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_seo_adv_group',
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
        name: "ux_b_seo_adv_group",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ENGINE_ID" },
          { name: "XML_ID" },
        ]
      },
      {
        name: "ix_b_seo_adv_group1",
        using: "BTREE",
        fields: [
          { name: "CAMPAIGN_ID" },
        ]
      },
    ]
  });
};
