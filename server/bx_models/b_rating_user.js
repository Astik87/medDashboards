const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_user', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RATING_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BONUS: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    VOTE_WEIGHT: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    VOTE_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_rating_user',
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
          { name: "RATING_ID" },
          { name: "ENTITY_ID" },
        ]
      },
      {
        name: "IX_B_RAT_USER_2",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
        ]
      },
    ]
  });
};
