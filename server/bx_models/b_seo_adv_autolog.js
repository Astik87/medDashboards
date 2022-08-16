const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_adv_autolog', {
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
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    CAMPAIGN_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAMPAIGN_XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    BANNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BANNER_XML_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CAUSE_CODE: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    SUCCESS: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'b_seo_adv_autolog',
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
        name: "ix_b_seo_adv_autolog1",
        using: "BTREE",
        fields: [
          { name: "ENGINE_ID" },
        ]
      },
      {
        name: "ix_b_seo_adv_autolog2",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
    ]
  });
};
