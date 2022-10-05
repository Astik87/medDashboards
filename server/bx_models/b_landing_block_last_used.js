const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_block_last_used', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DATE_CREATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'b_landing_block_last_used',
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
        name: "IX_B_BLOCK_LU_USER",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "IX_B_BLOCK_LU_USER_CODE",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "CODE" },
        ]
      },
      {
        name: "IX_B_BLOCK_LU_CODE",
        using: "BTREE",
        fields: [
          { name: "CODE" },
        ]
      },
    ]
  });
};
