"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFactory = void 0;
const sequelize_1 = require("sequelize");
exports.ConfigFactory = (sequelize) => {
    const attributes = {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        key: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    };
    const Config = sequelize.define('Config', attributes, { tableName: 'token' });
    return Config;
};
