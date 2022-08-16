const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_clouds_file_save', {
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
    SUBDIR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FILE_NAME: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EXTERNAL_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FILE_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_clouds_file_save',
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
        name: "IX_EXTERNAL_ID",
        using: "BTREE",
        fields: [
          { name: "EXTERNAL_ID" },
        ]
      },
    ]
  });
};
