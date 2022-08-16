const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_rule', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    NAME: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ENTITY_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CONDITION_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CONDITION_MODULE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CONDITION_CLASS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CONDITION_METHOD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CONDITION_CONFIG: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACTION_NAME: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ACTION_CONFIG: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ACTIVATE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    ACTIVATE_CLASS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ACTIVATE_METHOD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DEACTIVATE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    },
    DEACTIVATE_CLASS: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DEACTIVATE_METHOD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LAST_MODIFIED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LAST_APPLIED: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rating_rule',
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
