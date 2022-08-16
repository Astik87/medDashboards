const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_file_search', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SESS_ID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    F_PATH: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    B_DIR: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    F_SIZE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    F_TIME: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'b_file_search',
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
