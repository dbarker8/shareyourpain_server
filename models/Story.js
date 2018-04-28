var models = require('./index');

module.exports = (sequelize, DataTypes) => {
    const Story = sequelize.define("Story", {
        body: DataTypes.TEXT,
        type: DataTypes.STRING,
        color: DataTypes.STRING,
        font: DataTypes.TEXT,
        style: DataTypes.TEXT,
        isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
        userId: DataTypes.INTEGER
    });

    Story.associate = (models) => {
        // Story.hasMany(models.Order);
        Story.belongsTo(models.User);
    }

    return Story;
};