const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_finder_dest', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CODE: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    CODE_USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CODE_TYPE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CONTEXT: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    LAST_USE_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_finder_dest',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "CODE" },
          { name: "CONTEXT" },
        ]
      },
      {
        name: "IX_FINDER_DEST",
        using: "BTREE",
        fields: [
          { name: "CODE_TYPE" },
        ]
      },
    ]
  });
};
