const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_clouds_delete_queue', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    BUCKET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FILE_PATH: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'b_clouds_delete_queue',
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
        name: "ix_b_clouds_delete_queue_1",
        using: "BTREE",
        fields: [
          { name: "BUCKET_ID" },
          { name: "FILE_PATH", length: 100 },
        ]
      },
    ]
  });
};
