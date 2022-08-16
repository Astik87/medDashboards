const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_user_right', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GROUP_CODE: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_search_user_right',
    timestamps: false,
    indexes: [
      {
        name: "UX_B_SEARCH_USER_RIGHT",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "GROUP_CODE" },
        ]
      },
    ]
  });
};
