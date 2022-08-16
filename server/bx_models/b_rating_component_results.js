const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_component_results', {
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
    MODULE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    RATING_TYPE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    COMPLEX_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CURRENT_VALUE: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rating_component_results',
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
        name: "IX_ENTITY_TYPE_ID",
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE_ID" },
        ]
      },
      {
        name: "IX_COMPLEX_NAME",
        using: "BTREE",
        fields: [
          { name: "COMPLEX_NAME" },
        ]
      },
      {
        name: "IX_RATING_ID_2",
        using: "BTREE",
        fields: [
          { name: "RATING_ID" },
          { name: "COMPLEX_NAME" },
        ]
      },
    ]
  });
};
