const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_socialservices_message', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SOCSERV_USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PROVIDER: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    MESSAGE: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    INSERT_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SUCCES_SENT: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'b_socialservices_message',
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
