const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_socialservices_zoom_meeting', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ENTITY_TYPE_ID: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CONFERENCE_URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CONFERENCE_EXTERNAL_ID: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    CONFERENCE_PASSWORD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    JOINED: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CONFERENCE_CREATED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CONFERENCE_ENDED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DURATION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TITLE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SHORT_LINK: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HAS_RECORDING: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CONFERENCE_STARTED: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_socialservices_zoom_meeting',
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
        name: "IX_B_SOCIALSERVICES_ZOOM_MEETING_1",
        using: "BTREE",
        fields: [
          { name: "CONFERENCE_EXTERNAL_ID" },
        ]
      },
      {
        name: "IX_B_SOCIALSERVICES_ZOOM_MEETING_2",
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE_ID" },
          { name: "ENTITY_ID" },
        ]
      },
    ]
  });
};
