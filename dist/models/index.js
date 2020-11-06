"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = exports.createModels = void 0;
const sequelize_1 = require("sequelize");
const Config_1 = require("./Config");
exports.createModels = (db, dbPath) => {
    //export const createModels = (sequelizeConfig: any): DbInterface => {
    //const { database, username, password, params } = sequelizeConfig;
    const sequelize = new sequelize_1.Sequelize({
        logging: false,
        dialect: 'sqlite',
        storage: dbPath
    });
    Object.keys(db).forEach(modelName => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    return db;
};
exports.createConfig = (dbPath) => {
    //export const createModels = (sequelizeConfig: any): DbInterface => {
    //const { database, username, password, params } = sequelizeConfig;
    const sequelize = new sequelize_1.Sequelize({
        logging: false,
        dialect: 'sqlite',
        storage: dbPath
    });
    const cDB = {
        sequelize,
        Config: Config_1.ConfigFactory(sequelize),
    };
    Object.keys(cDB).forEach(modelName => {
        if (cDB[modelName].associate) {
            cDB[modelName].associate(cDB);
        }
    });
    return cDB;
};
