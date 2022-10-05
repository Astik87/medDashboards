const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_rating_vote', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RATING_VOTING_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ENTITY_TYPE_ID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OWNER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    VALUE: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: false
    },
    ACTIVE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CREATED: {
      type: DataTypes.DATE,
      allowNull: false
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    USER_IP: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    REACTION: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_rating_vote',
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
        name: "IX_RAT_VOTE_ID",
        using: "BTREE",
        fields: [
          { name: "RATING_VOTING_ID" },
          { name: "USER_ID" },
        ]
      },
      {
        name: "IX_RAT_VOTE_ID_2",
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE_ID" },
          { name: "ENTITY_ID" },
          { name: "USER_ID" },
        ]
      },
      {
        name: "IX_RAT_VOTE_ID_3",
        using: "BTREE",
        fields: [
          { name: "OWNER_ID" },
          { name: "CREATED" },
        ]
      },
      {
        name: "IX_RAT_VOTE_ID_5",
        using: "BTREE",
        fields: [
          { name: "CREATED" },
          { name: "VALUE" },
        ]
      },
      {
        name: "IX_RAT_VOTE_ID_6",
        using: "BTREE",
        fields: [
          { name: "ACTIVE" },
        ]
      },
      {
        name: "IX_RAT_VOTE_ID_7",
        using: "BTREE",
        fields: [
          { name: "RATING_VOTING_ID" },
          { name: "CREATED" },
        ]
      },
      {
        name: "IX_RAT_VOTE_ID_8",
        using: "BTREE",
        fields: [
          { name: "ENTITY_TYPE_ID" },
          { name: "CREATED" },
        ]
      },
      {
        name: "IX_RAT_VOTE_ID_9",
        using: "BTREE",
        fields: [
          { name: "CREATED" },
          { name: "USER_ID" },
        ]
      },
      {
        name: "IX_RAT_VOTE_ID_10",
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
          { name: "OWNER_ID" },
        ]
      },
    ]
  });
};
