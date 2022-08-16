const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_socialservices_zoom_meeting_recording', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EXTERNAL_ID: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    MEETING_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    START_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    END_DATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FILE_TYPE: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    FILE_SIZE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PLAY_URL: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DOWNLOAD_URL: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    RECORDING_TYPE: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    DOWNLOAD_TOKEN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FILE_ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_socialservices_zoom_meeting_recording',
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
        name: "IX_B_SOCIALSERVICES_ZOOM_MEETING_RECORDING_1",
        using: "BTREE",
        fields: [
          { name: "MEETING_ID" },
        ]
      },
    ]
  });
};
