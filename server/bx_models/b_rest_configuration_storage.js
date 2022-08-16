const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_configuration_storage', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CREATE_TIME: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CONTEXT: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    CODE: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    DATA: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_rest_configuration_storage',
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
