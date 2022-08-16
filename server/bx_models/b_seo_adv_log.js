const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_seo_adv_log', {
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
    REQUEST_URI: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    REQUEST_DATA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RESPONSE_TIME: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    RESPONSE_STATUS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RESPONSE_DATA: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_seo_adv_log',
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
        name: "ix_b_seo_adv_log1",
        using: "BTREE",
        fields: [
          { name: "ENGINE_ID" },
        ]
      },
      {
        name: "ix_b_seo_adv_log2",
        using: "BTREE",
        fields: [
          { name: "TIMESTAMP_X" },
        ]
      },
    ]
  });
};
