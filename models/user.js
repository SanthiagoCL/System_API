const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');

const User = sequelize.define('User',{
    usename: {type: DataTypes.STRING, allowNull: false},
    loginuser: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    active: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true},
}, {
    timestamps: false,
}

); 

module.exports = User;
