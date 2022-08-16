const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_access_check', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PROVIDER_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_access_check',
    timestamps: false,
    indexes: [
      {
        name: "ix_uac_user_provider",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "PROVIDER_ID" },
        ]
      },
    ]
  });
};
