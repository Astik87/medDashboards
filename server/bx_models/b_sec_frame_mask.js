const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_sec_frame_mask', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    SITE_ID: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    FRAME_MASK: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    LIKE_MASK: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    PREG_MASK: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_sec_frame_mask',
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
