const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_results', {
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
    ENTITY_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CURRENT_VALUE: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    PREVIOUS_VALUE: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    CURRENT_POSITION: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    PREVIOUS_POSITION: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_rating_results',
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
        name: "IX_RATING_3",
        using: "BTREE",
        fields: [
          { name: "RATING_ID" },
          { name: "ENTITY_TYPE_ID" },
          { name: "ENTITY_ID" },
        ]
      },
      {
        name: "IX_RATING_4",
        using: "BTREE",
        fields: [
          { name: "RATING_ID" },
          { name: "ENTITY_ID" },
        ]
      },
    ]
  });
};
