const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_uts_iblock_9_section', {
    VALUE_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UF_START: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_END: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UF_CITY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_PLACE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_PREVIEW: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_KEY_SPEAKERS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_DIRECTIONS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ORGS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ORGS_COMPANY: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_PROGRAM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_TAGS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ARCHIVE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SPONSORS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_PERIOD_ACC: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ACCEPT_PERCENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_NMO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_PROGRAM_PDF: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_MHIDE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_CLOSED: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_AGREE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_CHANNEL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_TRANSLATION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SHOW_ON_LANDING: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_CONFERENCE_HALL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_PROGRAM_HTML: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_PROGRAM_HTML_EN: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LANDING_THEME: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_HEADER1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_HEADER2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_HEADER4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_HEADER5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_HEADER3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_TRANSLATION_DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_TARGET_DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_TARGET: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LANDING_PROGRAMM: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_WHY_DESCRIPTION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_WHY_LARGE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_WHY_SMALL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ORG_FILES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_MODERATORS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LOGO_FILE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_LANDING_QUASTION1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LANDING_QUASTION2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LANDING_QA1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LANDING_QA2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_LANDING_QA3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_FIX_PLAY_STATE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_PIN_ACTUAL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_PIN_POPULAR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ACTUAL_PREVIEW_PICTURE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_TEMPLATE: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_ACTIVE_TAB: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_SPONSORS_IMG: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SECTIONS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SEND_EMAIL: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_API_USER_ACTIVYTI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_SPONSOR_FILES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_GEN_SPONSOR_FILES: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_KAMPUS_TRAVM: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_LINK: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_EVIMG: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_EVENT_LINK: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UF_QR: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UF_ADDSITE: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_uts_iblock_9_section',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VALUE_ID" },
        ]
      },
    ]
  });
};
