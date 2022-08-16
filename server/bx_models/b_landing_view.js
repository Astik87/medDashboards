const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_view', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VIEWS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FIRST_VIEW: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LAST_VIEW: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_landing_view',
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
        name: "IX_B_VIEW_LIDUID",
        using: "BTREE",
        fields: [
          { name: "LID" },
          { name: "USER_ID" },
        ]
      },
    ]
  });
};
