const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('b_iblock_right', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IBLOCK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'b_iblock',
        key: 'ID'
      }
    },
    GROUP_CODE: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ENTITY_TYPE: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    ENTITY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DO_INHERIT: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    TASK_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'b_task',
        key: 'ID'
      }
    },
    OP_SREAD: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    OP_EREAD: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    XML_ID: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'b_iblock_right',
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
        name: "ix_b_iblock_right_iblock_id",
        using: "BTREE",
        fields: [
          { name: "IBLOCK_ID" },
          { name: "ENTITY_TYPE" },
          { name: "ENTITY_ID" },
        ]
      },
      {
        name: "ix_b_iblock_right_group_code",
        using: "BTREE",
        fields: [
          { name: "GROUP_CODE" },
          { name: "IBLOCK_ID" },
        ]
      },
      {
        name: "ix_b_iblock_right_entity",
        using: "BTREE",
        fields: [
          { name: "ENTITY_ID" },
          { name: "ENTITY_TYPE" },
        ]
      },
      {
        name: "ix_b_iblock_right_op_eread",
        using: "BTREE",
        fields: [
          { name: "ID" },
          { name: "OP_EREAD" },
          { name: "GROUP_CODE" },
        ]
      },
      {
        name: "ix_b_iblock_right_op_sread",
        using: "BTREE",
        fields: [
          { name: "ID" },
          { name: "OP_SREAD" },
          { name: "GROUP_CODE" },
        ]
      },
      {
        name: "ix_b_iblock_right_task_id",
        using: "BTREE",
        fields: [
          { name: "TASK_ID" },
        ]
      },
    ]
  });
};
