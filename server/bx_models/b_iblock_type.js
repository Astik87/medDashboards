const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_type', {
    ID: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    SECTIONS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    EDIT_FILE_BEFORE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EDIT_FILE_AFTER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    IN_RSS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    }
  }, {
    sequelize,
    tableName: 'b_iblock_type',
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
    ]
  });
};
