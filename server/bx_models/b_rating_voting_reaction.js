const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_voting_reaction', {
    ENTITY_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    REACTION: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    TOTAL_VOTES: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_rating_voting_reaction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE_ID" },
          { name: "ENTITY_ID" },
          { name: "REACTION" },
        ]
      },
    ]
  });
};
