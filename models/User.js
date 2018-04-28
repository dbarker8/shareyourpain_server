var models = require('./index');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      notes: DataTypes.TEXT,
      accountActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    });

    User.associate = (models) => {
        User.hasMany(models.Story);
    //     User.hasOne(models.LawnDetails);
    }

    return User;
};