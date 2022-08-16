const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sec_iprule', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RULE_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "M"
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    ADMIN_SECTION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    ACTIVE_FROM: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ACTIVE_FROM_TIMESTAMP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACTIVE_TO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ACTIVE_TO_TIMESTAMP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sec_iprule',
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
        name: "ix_b_sec_iprule_active_to",
        using: "BTREE",
        fields: [
          { name: "ACTIVE_TO" },
        ]
      },
    ]
  });
};
