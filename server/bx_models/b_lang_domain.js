const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_lang_domain', {
    LID: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DOMAIN: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'b_lang_domain',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LID" },
          { name: "DOMAIN" },
        ]
      },
    ]
  });
};
