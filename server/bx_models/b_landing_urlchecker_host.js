const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_landing_urlchecker_host', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STATUS_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    HOST: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DATE_MODIFY: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'b_landing_urlchecker_host',
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
        name: "IX_B_CHECKER_STATUS_HOST",
        using: "BTREE",
        fields: [
          { name: "STATUS_ID" },
          { name: "HOST" },
        ]
      },
    ]
  });
};
