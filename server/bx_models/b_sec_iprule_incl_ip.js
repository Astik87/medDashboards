const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sec_iprule_incl_ip', {
    IPRULE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RULE_IP: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    IP_START: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    IP_END: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sec_iprule_incl_ip',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IPRULE_ID" },
          { name: "RULE_IP" },
        ]
      },
    ]
  });
};
