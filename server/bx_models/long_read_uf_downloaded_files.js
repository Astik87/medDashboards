const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('long_read_uf_downloaded_files', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VALUE: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'long_read_uf_downloaded_files',
    timestamps: false,
    indexes: [
      {
        name: "IX_UTM_HL34_475_ID",
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "IX_UTM_HL34_475_VALUE",
        using: "BTREE",
        fields: [
          { name: "VALUE" },
        ]
      },
    ]
  });
};
