const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const b_user = require('../bx_models/b_user')
const b_uts_user = require('../bx_models/b_uts_user')
const med_directions = require('../bx_models/med_directions')
const long_read = require('../bx_models/long_read')
const iblock_sections = require('../bx_models/b_iblock_section')
const iblock_elements = require('../bx_models/b_iblock_element')
const iblock_elemrnt_property = require('../bx_models/b_iblock_element_property')
const event_registrations = require('../bx_models/event_registry')
const b_uts_iblock_9_section = require('../bx_models/b_uts_iblock_9_section')
const visit_plans = require('../bx_models/dashboard_plans')
const visit_statistic = require('../bx_models/visits_log')

const User = b_user(sequelize, DataTypes)
const UserFields = b_uts_user(sequelize, DataTypes)
const MedDirections = med_directions(sequelize, DataTypes)
const LongRead = long_read(sequelize, DataTypes)
const IBlockSections = iblock_sections(sequelize, DataTypes)
const IBlockElement = iblock_elements(sequelize, DataTypes)
const IBlockElementProperty = iblock_elemrnt_property(sequelize, DataTypes)
const EventRegistrations = event_registrations(sequelize, DataTypes)
const IBlockSectionFields = b_uts_iblock_9_section(sequelize, DataTypes)
const VisitPlans = visit_plans(sequelize, DataTypes)
const VisitStatistic = visit_statistic(sequelize, DataTypes)

User.hasOne(UserFields, {foreignKey: 'VALUE_ID'});
UserFields.belongsTo(User, {foreignKey: 'VALUE_ID'});

MedDirections.hasMany(UserFields, {foreignKey: 'ID'});
UserFields.belongsTo(MedDirections, {foreignKey: 'UF_DIRECTION'});

User.hasOne(LongRead, {foreignKey: 'ID'})
LongRead.belongsTo(User, {foreignKey: 'UF_USER'})

IBlockSections.hasOne(LongRead, {foreignKey: 'ID'})
LongRead.belongsTo(IBlockSections, {foreignKey: 'UF_EVENT'})

IBlockSections.hasMany(EventRegistrations, {foreignKey: 'ID'})
EventRegistrations.belongsTo(IBlockSections, {foreignKey: 'UF_EVENT'})

IBlockSections.hasOne(IBlockSectionFields, {foreignKey: 'VALUE_ID'})
IBlockSectionFields.belongsTo(IBlockSections, {foreignKey: 'ID'})

User.hasMany(EventRegistrations, {foreignKey: 'ID'})
EventRegistrations.belongsTo(User, {foreignKey: 'UF_USER'})

IBlockElement.hasMany(IBlockElementProperty, {foreignKey: 'IBLOCK_ELEMENT_ID'})
IBlockElementProperty.belongsTo(IBlockElement, {foreignKey: 'ID'})

IBlockElement.hasOne(VisitStatistic, {foreignKey: 'UF_ELEMID'})
VisitStatistic.belongsTo(IBlockElement, {foreignKey: 'ID'})

module.exports = {
    User,
    UserFields,
    MedDirections,
    LongRead,
    IBlockSections,
    IBlockElement,
    IBlockElementProperty,
    EventRegistrations,
    IBlockSectionFields,
    VisitPlans,
    VisitStatistic
}
