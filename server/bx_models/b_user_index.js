const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_user_index', {
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEARCH_USER_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SEARCH_DEPARTMENT_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    SEARCH_ADMIN_CONTENT: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    LAST_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SECOND_NAME: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    WORK_POSITION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UF_DEPARTMENT_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_user_index',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "USER_ID" },
        ]
      },
      {
        name: "IXF_B_USER_INDEX_1",
        type: "FULLTEXT",
        fields: [
          { name: "SEARCH_USER_CONTENT" },
        ]
      },
      {
        name: "IXF_B_USER_INDEX_2",
        type: "FULLTEXT",
        fields: [
          { name: "SEARCH_DEPARTMENT_CONTENT" },
        ]
      },
      {
        name: "IXF_B_USER_INDEX_3",
        type: "FULLTEXT",
        fields: [
          { name: "SEARCH_ADMIN_CONTENT" },
        ]
      },
    ]
  });
};
