const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_urlrewrite', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SITE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RULE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    LANDING_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CREATED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MODIFIED_BY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DATE_MODIFY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    }
  }, {
    sequelize,
    tableName: 'b_landing_urlrewrite',
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
        name: "IX_SITE_RULE",
        using: "BTREE",
        fields: [
          { name: "SITE_ID" },
          { name: "RULE" },
        ]
      },
      {
        name: "IX_LANDING_ID",
        using: "BTREE",
        fields: [
          { name: "LANDING_ID" },
        ]
      },
    ]
  });
};
