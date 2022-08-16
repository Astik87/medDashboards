const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('long_read_uf_estimation', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALUE: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'long_read_uf_estimation',
    timestamps: false,
    indexes: [
      {
        name: "IX_UTM_HL34_381_ID",
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "IX_UTM_HL34_381_VALUE",
        using: "BTREE",
        fields: [
          { name: "VALUE" },
        ]
      },
    ]
  });
};
