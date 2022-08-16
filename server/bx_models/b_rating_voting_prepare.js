const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_voting_prepare', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RATING_VOTING_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TOTAL_VALUE: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    TOTAL_VOTES: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TOTAL_POSITIVE_VOTES: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TOTAL_NEGATIVE_VOTES: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_rating_voting_prepare',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "IX_RATING_VOTING_ID",
        using: "BTREE",
        fields: [
          { name: "RATING_VOTING_ID" },
        ]
      },
    ]
  });
};
