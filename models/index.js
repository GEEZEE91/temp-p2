const User = require('./User');
const Party = require('./Party');
const Theme = require('./Theme');
// const Costume = require('./Costume');

User.hasMany(Party, {
    foreignKey: 'user_id'
});

Party.belongsTo(User, {
    foreignKey: 'user_id'
});

Party.belongsTo(Theme, {
    foreignKey: 'theme_id'
});

/* Party.hasOne(Theme, {
    foreignKey: 'theme_id'
}); */

/* Theme.belongsTo(Party, {
    foreignKey: 'theme_id'
}); */

module.exports = { User, Party, Theme };