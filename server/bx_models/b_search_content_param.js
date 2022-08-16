const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_content_param', {
    SEARCH_CONTENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PARAM_NAME: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    PARAM_VALUE: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_search_content_param',
    timestamps: false,
    indexes: [
      {
        name: "IX_B_SEARCH_CONTENT_PARAM",
        using: "BTREE",
        fields: [
          { name: "SEARCH_CONTENT_ID" },
          { name: "PARAM_NAME" },
        ]
      },
      {
        name: "IX_B_SEARCH_CONTENT_PARAM_1",
        using: "BTREE",
        fields: [
          { name: "PARAM_NAME" },
          { name: "PARAM_VALUE", length: 50 },
          { name: "SEARCH_CONTENT_ID" },
        ]
      },
    ]
  });
};
