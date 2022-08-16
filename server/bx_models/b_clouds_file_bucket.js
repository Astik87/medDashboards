const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_clouds_file_bucket', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "Y"
    },
    SORT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 500
    },
    READ_ONLY: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    SERVICE_ID: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BUCKET: {
      type: DataTypes.STRING(63),
      allowNull: true
    },
    LOCATION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CNAME: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FILE_COUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    FILE_SIZE: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    LAST_FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PREFIX: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SETTINGS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FILE_RULES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FAILOVER_ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    FAILOVER_BUCKET_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FAILOVER_COPY: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    FAILOVER_DELETE: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    FAILOVER_DELETE_DELAY: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_clouds_file_bucket',
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
