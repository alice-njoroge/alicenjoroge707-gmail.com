module.exports = (Sequelize, DataTypes) => {
    const user = Sequelize.define('user', {
        email: DataTypes.STRING,
        name: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return user;
};