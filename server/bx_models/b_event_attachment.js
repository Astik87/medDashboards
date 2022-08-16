const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_event_attachment', {
    EVENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IS_FILE_COPIED: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'b_event_attachment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EVENT_ID" },
          { name: "FILE_ID" },
        ]
      },
    ]
  });
};
