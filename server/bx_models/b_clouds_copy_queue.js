const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_clouds_copy_queue', {
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
    OP: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    SOURCE_BUCKET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOURCE_FILE_PATH: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    TARGET_BUCKET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TARGET_FILE_PATH: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    FILE_SIZE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    FILE_POS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    FAIL_COUNTER: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    STATUS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y"
    },
    ERROR_MESSAGE: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_clouds_copy_queue',
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
