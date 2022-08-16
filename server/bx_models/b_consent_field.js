const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_consent_field', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AGREEMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_consent_field',
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
        name: "IX_B_CONSENT_FIELD_AG_ID",
        using: "BTREE",
        fields: [
          { name: "AGREEMENT_ID" },
        ]
      },
    ]
  });
};
