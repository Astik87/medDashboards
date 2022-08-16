const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_xml_tree', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PARENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LEFT_MARGIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RIGHT_MARGIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DEPTH_LEVEL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VALUE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ATTRIBUTES: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_xml_tree',
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
        name: "ix_b_xml_tree_parent",
        using: "BTREE",
        fields: [
          { name: "PARENT_ID" },
        ]
      },
      {
        name: "ix_b_xml_tree_left",
        using: "BTREE",
        fields: [
          { name: "LEFT_MARGIN" },
        ]
      },
    ]
  });
};
