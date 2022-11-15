const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const b_user = require('../bx_models/b_user')
const b_uts_user = require('../bx_models/b_uts_user')
const b_user_group = require('../bx_models/b_user_group')
const b_group = require('../bx_models/b_group')
const dashboard_users = require('../bx_models/dashboard_users')
const med_directions = require('../bx_models/med_directions')
const long_read = require('../bx_models/long_read')
const long_read_plans = require('../bx_models/long_read_plans')
const iblock_sections = require('../bx_models/b_iblock_section')
const iblock_elements = require('../bx_models/b_iblock_element')
const iblock_elemrnt_property = require('../bx_models/b_iblock_element_property')
const event_registrations = require('../bx_models/event_registry')
const event_plans = require('../bx_models/event_plans')
const b_uts_iblock_9_section = require('../bx_models/b_uts_iblock_9_section')
const visit_plans = require('../bx_models/dashboard_plans')
const visit_statistic = require('../bx_models/visits_log')
const waves = require('../bx_models/waves')
const parce_prodoctorov = require('../bx_models/parce_prodoctorov')
const dashboard_notifications = require('../bx_models/dashboard_notifications')
const dashboard_user_accesses = require('../bx_models/dashboard_user_accesses')
const nmo_entity = require('../bx_models/nmo_entity.js')

const User = b_user(sequelize, DataTypes)
const UserFields = b_uts_user(sequelize, DataTypes)
const UserGroup = b_user_group(sequelize, DataTypes)
const Groups = b_group(sequelize, DataTypes)
const DashboardUser = dashboard_users(sequelize, DataTypes)
const MedDirections = med_directions(sequelize, DataTypes)
const LongRead = long_read(sequelize, DataTypes)
const LongReadPlans = long_read_plans(sequelize, DataTypes)
const IBlockSections = iblock_sections(sequelize, DataTypes)
const IBlockElement = iblock_elements(sequelize, DataTypes)
const IBlockElementProperty = iblock_elemrnt_property(sequelize, DataTypes)
const EventRegistrations = event_registrations(sequelize, DataTypes)
const EventPlans = event_plans(sequelize, DataTypes)
const IBlockSectionFields = b_uts_iblock_9_section(sequelize, DataTypes)
const VisitPlans = visit_plans(sequelize, DataTypes)
const VisitStatistic = visit_statistic(sequelize, DataTypes)
const Waves = waves(sequelize, DataTypes)
const ProdoctorovParser = parce_prodoctorov(sequelize, DataTypes)
const DashboardNotifications = dashboard_notifications(sequelize, DataTypes)
const DashboardUserAccesses = dashboard_user_accesses(sequelize, DataTypes)
const NmoEntity = nmo_entity(sequelize, DataTypes)

User.hasOne(UserFields, {foreignKey: 'VALUE_ID'});
UserFields.belongsTo(User, {foreignKey: 'ID'});

MedDirections.hasMany(UserFields, {foreignKey: 'ID'});
UserFields.belongsTo(MedDirections, {foreignKey: 'UF_DIRECTION'});

User.hasOne(LongRead, {foreignKey: 'ID'})
LongRead.belongsTo(User, {foreignKey: 'UF_USER'})

// UserFields.belongsToMany(Groups, {through: UserGroup, foreignKey: 'USER_ID'})
// Groups.belongsToMany(UserFields, {through: UserGroup, foreignKey: 'GROUP_ID'})

User.hasMany(UserGroup, {foreignKey: 'ID'})
UserGroup.belongsTo(User, {foreignKey: 'USER_ID'})

DashboardUser.hasMany(DashboardUserAccesses, {foreignKey: 'UF_USER', as: 'accesses'})
DashboardUserAccesses.belongsTo(DashboardUser, {foreignKey: 'ID', as: 'accesses'})

IBlockSections.hasOne(LongRead, {foreignKey: 'ID'})
LongRead.belongsTo(IBlockSections, {foreignKey: 'UF_EVENT'})

IBlockSections.hasMany(EventRegistrations, {foreignKey: 'UF_EVENT'})
EventRegistrations.belongsTo(IBlockSections, {foreignKey: 'UF_EVENT'})

// IBlockSections.hasMany(EventRegistrations, {foreignKey: 'UF_EVENT'})
// EventRegistrations.belongsTo(IBlockSections, {foreignKey: 'ID'})

IBlockSections.hasOne(IBlockSectionFields, {foreignKey: 'VALUE_ID'})
IBlockSectionFields.belongsTo(IBlockSections, {foreignKey: 'ID'})

User.hasMany(EventRegistrations, {foreignKey: 'ID'})
EventRegistrations.belongsTo(User, {foreignKey: 'UF_USER'})

User.hasMany(EventRegistrations, {foreignKey: 'UF_USER', as: 'UserVisits'})
EventRegistrations.belongsTo(User, {foreignKey: 'ID', as: 'UserVisits'})

UserFields.hasOne(EventRegistrations, {foreignKey: 'VALUE_ID'})
EventRegistrations.belongsTo(UserFields, {foreignKey: 'UF_USER'})

UserFields.hasOne(EventRegistrations, {foreignKey: 'UF_USER', as: 'UserFieldsEventRegistrations'})
EventRegistrations.belongsTo(UserFields, {foreignKey: 'VALUE_ID', as: 'UserFieldsEventRegistrations'})

IBlockElement.hasMany(IBlockElementProperty, {foreignKey: 'IBLOCK_ELEMENT_ID'})
IBlockElementProperty.belongsTo(IBlockElement, {foreignKey: 'ID'})

IBlockElement.hasOne(VisitStatistic, {foreignKey: 'UF_ELEMID'})
VisitStatistic.belongsTo(IBlockElement, {foreignKey: 'ID'})

VisitPlans.hasOne(Waves, {foreignKey: 'ID'})
Waves.belongsTo(VisitPlans, {foreignKey: 'UF_VISIT_PLAN'})

EventPlans.hasOne(Waves, {foreignKey: 'ID'})
Waves.belongsTo(EventPlans, {foreignKey: 'UF_EVENT_PLAN'})

LongReadPlans.hasOne(Waves, {foreignKey: 'ID'})
Waves.belongsTo(LongReadPlans, {foreignKey: 'UF_LONG_READ_PLAN'})

DashboardUser.hasMany(DashboardNotifications, {foreignKey: 'UF_USER'})
DashboardNotifications.belongsTo(DashboardUser, {foreignKey: 'ID'})

User.hasMany(NmoEntity, {foreignKey: 'ID'})
NmoEntity.belongsTo(User, {foreignKey: 'UF_USER'})

NmoEntity.hasOne(IBlockSections, {foreignKey: 'UF_EVENT'})
IBlockSections.belongsTo(NmoEntity, {foreignKey: 'ID'})

module.exports = {
    User,
    UserFields,
    UserGroup,
    Groups,
    DashboardUser,
    MedDirections,
    LongRead,
    LongReadPlans,
    IBlockSections,
    IBlockElement,
    IBlockElementProperty,
    EventRegistrations,
    EventPlans,
    IBlockSectionFields,
    VisitPlans,
    VisitStatistic,
    Waves,
    ProdoctorovParser,
    DashboardNotifications,
    DashboardUserAccesses,
    NmoEntity
}
