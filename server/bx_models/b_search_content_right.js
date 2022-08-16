const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_content_right', {
    SEARCH_CONTENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    GROUP_CODE: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_search_content_right',
    timestamps: false,
    indexes: [
      {
        name: "UX_B_SEARCH_CONTENT_RIGHT",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SEARCH_CONTENT_ID" },
          { name: "GROUP_CODE" },
        ]
      },
    ]
  });
};
