const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rest_integration', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ELEMENT_CODE: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    TITLE: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    PASSWORD_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    APP_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCOPE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    QUERY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OUTGOING_EVENTS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OUTGOING_NEEDED: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    OUTGOING_HANDLER_URL: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    WIDGET_NEEDED: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    WIDGET_HANDLER_URL: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    WIDGET_LIST: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    APPLICATION_TOKEN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    APPLICATION_NEEDED: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    APPLICATION_ONLY_API: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    BOT_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BOT_HANDLER_URL: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rest_integration',
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
