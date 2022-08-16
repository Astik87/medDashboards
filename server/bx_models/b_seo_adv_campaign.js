const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_adv_campaign', {
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
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    OWNER_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    OWNER_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LAST_UPDATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_seo_adv_campaign',
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
        name: "ux_b_seo_adv_campaign",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ENGINE_ID" },
          { name: "XML_ID" },
        ]
      },
    ]
  });
};
