const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_index_selector', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEARCH_SELECTOR_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_index_selector',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "IXF_B_USER_INDEX_SELECTOR_1",
        type: "FULLTEXT",
        fields: [
          { name: "SEARCH_SELECTOR_CONTENT" },
        ]
      },
    ]
  });
};
