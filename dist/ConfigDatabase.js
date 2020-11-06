"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigDatabase = void 0;
const Database_1 = require("./Database");
const models_1 = require("./models");
const sqlite = require('sqlite3');
class ConfigDatabase extends Database_1.Database {
    constructor(path) {
        super(path);
        this._db = models_1.createConfig(path);
        this._db.sequelize.authenticate()
            .then(() => {
            console.log('Config: Connection has been established successfully.');
            this._db.sequelize.sync();
        }).catch(error => {
            console.error('Unable to connect to the database:', error);
        });
    }
    get db() {
        return this._db;
    }
}
exports.ConfigDatabase = ConfigDatabase;
