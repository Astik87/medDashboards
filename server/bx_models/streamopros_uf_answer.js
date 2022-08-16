const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('streamopros_uf_answer', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALUE: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'streamopros_uf_answer',
    timestamps: false,
    indexes: [
      {
        name: "IX_UTM_HL28_297_ID",
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "IX_UTM_HL28_297_VALUE",
        using: "BTREE",
        fields: [
          { name: "VALUE" },
        ]
      },
    ]
  });
};
