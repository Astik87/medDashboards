const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_vote_group', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    GROUP_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_rating_vote_group',
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
        name: "RATING_ID",
        using: "BTREE",
        fields: [
          { name: "GROUP_ID" },
          { name: "TYPE" },
        ]
      },
    ]
  });
};
