const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_perf_hit', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DATE_HIT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IS_ADMIN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    REQUEST_METHOD: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SERVER_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SERVER_PORT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCRIPT_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    REQUEST_URI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    INCLUDED_FILES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MEMORY_PEAK_USAGE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CACHE_TYPE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CACHE_SIZE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CACHE_COUNT_R: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CACHE_COUNT_W: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CACHE_COUNT_C: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QUERIES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    QUERIES_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    COMPONENTS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    COMPONENTS_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SQL_LOG: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PAGE_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PROLOG_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PROLOG_BEFORE_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    AGENTS_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PROLOG_AFTER_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WORK_AREA_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPILOG_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPILOG_BEFORE_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EVENTS_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    EPILOG_AFTER_TIME: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MENU_RECALC: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_perf_hit',
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
        name: "IX_B_PERF_HIT_0",
        using: "BTREE",
        fields: [
          { name: "DATE_HIT" },
        ]
      },
    ]
  });
};
