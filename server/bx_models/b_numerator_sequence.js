const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_numerator_sequence', {
    NUMERATOR_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    KEY: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    TEXT_KEY: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NEXT_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LAST_INVOCATION_TIME: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_numerator_sequence',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "NUMERATOR_ID" },
          { name: "KEY" },
        ]
      },
    ]
  });
};
