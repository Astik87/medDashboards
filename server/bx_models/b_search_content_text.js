const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_content_text', {
    SEARCH_CONTENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEARCH_CONTENT_MD5: {
      type: DataTypes.CHAR(32),
      allowNull: false
    },
    SEARCHABLE_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_search_content_text',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SEARCH_CONTENT_ID" },
        ]
      },
    ]
  });
};
