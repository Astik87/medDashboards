const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_access_tokens_uf_scopes', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALUE: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'oauth_access_tokens_uf_scopes',
    timestamps: false,
    indexes: [
      {
        name: "IX_UTM_HL20_158_ID",
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "IX_UTM_HL20_158_VALUE",
        using: "BTREE",
        fields: [
          { name: "VALUE" },
        ]
      },
    ]
  });
};
