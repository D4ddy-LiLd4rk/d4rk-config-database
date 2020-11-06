"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularDatabase = void 0;
const Database_1 = require("./Database");
const models_1 = require("./models");
class RegularDatabase extends Database_1.Database {
    constructor(path, db) {
        super(path);
        this._db = models_1.createModels(db, path);
        this._db.sequelize.authenticate()
            .then(() => {
            console.log('Regular: Connection has been established successfully.');
            this._db.sequelize.sync();
        }).catch(error => {
            console.error('Unable to connect to the database:', error);
        });
    }
    get db() {
        return this._db;
    }
}
exports.RegularDatabase = RegularDatabase;
