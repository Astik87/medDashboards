const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_voting', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OWNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LAST_CALCULATED: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'b_rating_voting',
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
        name: "IX_ENTITY_TYPE_ID_2",
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE_ID" },
          { name: "ENTITY_ID" },
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_ENTITY_TYPE_ID_4",
        using: "BTREE",
        fields: [
          { name: "TOTAL_VALUE" },
        ]
      },
    ]
  });
};
