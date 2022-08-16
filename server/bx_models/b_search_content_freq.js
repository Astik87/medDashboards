const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_search_content_freq', {
    STEM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    LANGUAGE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    FREQ: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TF: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_search_content_freq',
    timestamps: false,
    indexes: [
      {
        name: "UX_B_SEARCH_CONTENT_FREQ",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "STEM" },
          { name: "LANGUAGE_ID" },
          { name: "SITE_ID" },
        ]
      },
    ]
  });
};
