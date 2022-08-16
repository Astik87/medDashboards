const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_clouds_file_upload', {
    ID: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    TIMESTAMP_X: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    FILE_PATH: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    FILE_SIZE: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    TMP_FILE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    BUCKET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PART_SIZE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PART_NO: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PART_FAIL_COUNTER: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NEXT_STEP: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_clouds_file_upload',
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
