const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sec_iprule_excl_mask', {
    IPRULE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RULE_MASK: {
      type: DataTypes.STRING(250),
      allowNull: false,
      primaryKey: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    LIKE_MASK: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    PREG_MASK: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sec_iprule_excl_mask',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IPRULE_ID" },
          { name: "RULE_MASK" },
        ]
      },
    ]
  });
};
